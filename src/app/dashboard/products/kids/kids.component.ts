import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {
  products: {};
  name: string = 'kids';
  product_colors: [];
  constructor(private _kidService: ProductService) { }

  ngOnInit(): void {
    this._kidService.getProductData(this.name).subscribe(
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
