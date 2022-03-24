import {Component, OnInit} from "@angular/core";

@Component({
  // selector: '[warning-alert]', //html atribute
  selector: '.warning-alert',
  template: `<p>This is a {{name}} Component. {{getWarningMessage()}}</p>`,
  styles: [`
    p{
      color: red;
      background-color: lightpink;
      border: red 1px solid;
      padding: 1rem;
    }
  `]
})
export class WarningAlertComponent implements OnInit{
  name: string = 'WarningAlert';
  message: string = "Something is wrong!!";
  getWarningMessage(){
    return this.message;
  }
  constructor() {}
  ngOnInit() {}
}


