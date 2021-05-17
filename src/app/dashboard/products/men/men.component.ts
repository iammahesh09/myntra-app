import { ProductService } from './../services/product.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  name: string = 'men';
  products: {};
  product_colors: [];
  constructor(private _menService: ProductService) { }

  ngOnInit(): void {
    this._menService.getProductData(this.name).subscribe(
      res => {
        this.products = res;
        this.product_colors = res['color'];
        console.log(res);
        console.log(this.product_colors);
      },
      error => { console.error(error) }
    )
  }

}
