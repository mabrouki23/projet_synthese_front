import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Category } from './models/category.model';



@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }
  rootURL = 'http://localhost:8080';

  getCategories():Observable<any> {
    return this.http.get<any>(this.rootURL + '/categories');
  }

  addCategory(category: any) {
    return this.http.post(this.rootURL + '/categories', {category});
  }
  getProductsByCategoryId(categoryId:any){
    return this.http.get<any>(this.rootURL+'/products/search/findByCategory?id='+categoryId)
  }
}