import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.routInfo.snapshot.queryParams['id']; // 获取通过link传参
    // this.productId = this.routInfo.snapshot.params['id']; // 获取通过路由传参

    this.routInfo.params.subscribe((params: Params) => this.productId = params['id']);
    this.routInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}

export class Product {
  constructor(public id: number, public name: string) {}
}
