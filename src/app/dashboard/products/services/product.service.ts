import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _menUrl = 'http://localhost:5000/'
  constructor(private _http: HttpClient) { }

  getProductData(product) {
    console.log(product);
    return this._http.get(this._menUrl + product).pipe(
      map(res => res)
    )
  }
}
