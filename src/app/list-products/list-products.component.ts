import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products!: any;
  
  constructor(private httpClinet:HttpClient) { }

  ngOnInit(): void {
    this.getAllproducts().subscribe(
      data=>{
        this.products=data._embedded.products;
      }
    )
  }

  getAllproducts():Observable<any>{
    return this.httpClinet.get<any>('http://localhost:8080/products')
  }
}
