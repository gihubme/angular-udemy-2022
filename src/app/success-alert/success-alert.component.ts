import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  name: string = 'SuccessAlert';
  message: string = "All is good!!"
  getMessage(){
    return this.message;
  }
  constructor() { }
  ngOnInit(): void {}

}
