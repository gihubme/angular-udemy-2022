import { Component, OnInit } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allowNewProduct: boolean = false;
  productCreationStatus: string = 'New Product can\'t be created';
  productListName: string = "My Soap Bubbles";

  inputProductName: string = "";
  productNames: string[] = [];
  products: ProductComponent[]=[];

  constructor() {
    setTimeout(()=>{
      // this.allowNewProduct = true;
      this.productCreationSwitch();
    }, 2000);
  }

  productCreationSwitch(){
    this.allowNewProduct=(this.allowNewProduct)?false:true;
    this.productCreationStatus = (!this.allowNewProduct)?'New Product can\'t be created':'New Product can be created';
  }

  onUpdateProductList(event: Event){
    this.productListName=(<HTMLInputElement>event.target).value;
  }

  onProductCreation(name: string){
    this.productNames.push(name);
    let product = new ProductComponent();
    product.updateName(name);
    this.products.push(product);
    console.log(this.products);
  }


  ngOnInit(): void {
  }

}
