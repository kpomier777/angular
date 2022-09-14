import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit{
  title = 'hola ';


  public colorControl = new FormControl ('');

  public personForm! : FormGroup;



    constructor(private formBuilder : FormBuilder) {

        this.personForm = this.formBuilder.group(
            {
                name : '',
                lastName : '',
                age : '',
                country:'',
            }
        )
    }

    ngOnInit() {
        this.colorControl.valueChanges.subscribe( value => {
            console.log('values changes : ' , value)
        })

        this.personForm.valueChanges.subscribe( value => {
            console.log('value changes group control : ' , value )
        })
    }

    onSubmit(form: any) {
        console.log("Form " ,form
        )
    }

    printColorControl(){
      console.log(this.colorControl)
    }


    sendPerson() {
        console.log('reactive form : ' , this.personForm )
    }

    disableName() {
        this.personForm.get('name')?.disable();
    }
}
