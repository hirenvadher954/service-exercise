import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetShopDataService {
  shopDataList: any;
  a: any;
  constructor(private http: HttpClient) {}

  public getShopData() {
    return this.http
      .get('http://localhost:4200/assets/shop-data.json');
  }
}
