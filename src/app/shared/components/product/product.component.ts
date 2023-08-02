import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public prdName : string = "Angular";
  public prdId : number = 10;
  skills : Array<string> = ["Javascript", "Angular", "Typescript", "Nodejs", "MongoDB"]
  constructor() { }

  ngOnInit(): void {
  }

}
