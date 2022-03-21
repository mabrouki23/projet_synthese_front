import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  rootURL = 'http://localhost:8080';
  constructor() { }
}
