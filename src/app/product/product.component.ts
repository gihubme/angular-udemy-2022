import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName: string = "";
  constructor() {console.log(this); }
  // constructor(name: string) {
  //   if( name === "" && name.length > 0)this.productName=name;
  // }

  updateName(name: string){
    this.productName=name;
  }

  getColor(){
    if(this.productName == "")return "orange";
    else return "green";
  }

  ngOnInit(): void { console.log(this);
  }

}
