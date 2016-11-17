import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  persons: any[] = [];

  addPersonForm: FormGroup;
  constructor(
    private http: Http,
    private fb: FormBuilder) {

  }
  ngOnInit() {
    this.addPersonForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      email: ['', Validators.required]
    });
  }
addPersonFromApi()
{
  this.http.get('http://127.0.0.1:9688/contacts').subscribe(response => {
    this.persons = response.json();
    });
}
  /* constructor(private fb: FormBuilder)
   {
     this.addPersonForm = this.fb.group({
       firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z -]+$')]],
       lastName: ['',Validators.required],
       email: ['',Validators.required]
     });
   }*/

  /* constructor(public nameListService: NameListService) { }*/

  addPerson() {
    this.persons.push(
      this.addPersonForm.value
      /* firstName: this.FirstName,
       lastName: this.LastName,
       email: this.Email*/
    );
  }
  removePerson(person : any, index: number) {
    this.persons.splice(index, 1);
    this.http.delete('http://127.0.0.1:9688/contacts/' + person.id).subscribe(() => {

    });
  }
  editPerson(person: any) {
    person.isEditing = true;
  };
}
