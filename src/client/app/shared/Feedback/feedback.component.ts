import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'feedback',
    templateUrl: 'feedback.component.html'
})
export class FeedbackComponent {
    feedback : string;

    AddFeedback(feedback : string){
       console.log('feedback: ', this.feedback);
    }
    Positive(input : string){
       console.log('feedback: ',"Positive")
    }
    Negative(input : string){
       console.log('feedback: ',"Negative")
    }
}