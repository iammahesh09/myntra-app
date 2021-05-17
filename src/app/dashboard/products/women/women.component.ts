import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  products: {};
  name: string = 'women';
  product_colors: [];
  constructor(private _womenService: ProductService) { }

  ngOnInit(): void {
    this._womenService.getProductData(this.name).subscribe(
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
