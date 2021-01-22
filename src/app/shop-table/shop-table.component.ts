import { GetShopDataService } from './../services/get-shop-data.service';
import { Component, OnInit } from '@angular/core';

export interface ShoppingDetails {
  image: string;
  productName: string;
  productCode: number;
  branchName: string;
  branchCode: number;
  shippingAddress: string;
}

@Component({
  selector: 'app-shop-table',
  templateUrl: './shop-table.component.html',
  styleUrls: ['./shop-table.component.css'],
})
export class ShopTableComponent implements OnInit {
  name: string = '';

  displayedColumns: string[] = [
    'image',
    'productName',
    'productCode',
    'branchName',
    'branchCode',
    'shippingAddress',
    'details',
  ];

  constructor(private shopDataService: GetShopDataService) {}

  dataSource: ShoppingDetails[] = [];

  ngOnInit(): void {
    this.shopDataService.getShopData().subscribe((data) => {
      this.dataSource = (<ShoppingDetails[]>data);
    });
  }

  getDetails(i: number) {
    alert(
      'Product Name:- ' +
        this.dataSource[i].productName +
        '\n' +
        'Product Code:- ' +
        this.dataSource[i].productCode +
        '\n' +
        'Branch Name:- ' +
        this.dataSource[i].branchName +
        '\n' +
        'Branch Code:- ' +
        this.dataSource[i].branchCode +
        '\n' +
        'Shipping Address:- ' +
        this.dataSource[i].shippingAddress +
        '\n'
    );
  }
}
