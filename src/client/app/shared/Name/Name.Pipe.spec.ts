import{PersonPipe} from './Name.pipe';

describe('Pipe : Person ',() => {
    let pipe:any;
    beforeEach(()=>{
        pipe = new PersonPipe();
    });
    it('should change the name to uppercase',() => {
        expect(pipe.transform().toBe(''));
    });
});
