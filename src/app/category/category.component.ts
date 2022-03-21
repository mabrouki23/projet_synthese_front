import { Component, OnInit } from '@angular/core';

import { CategoryServiceService } from '../category-service.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  products!: Product[];
  commande!: any;
  selectedCategory!: Category;
  selectedProduct!: Product;
  flag:any;
  title:any;
 
  
  constructor(private categoryService:CategoryServiceService ,private _router:Router,private _activateRoute:ActivatedRoute) { 
    this.commande=this._router.getCurrentNavigation()!.extras.state;
  }

  ngOnInit(): void {
    this.onGetAllCategories();
    ;
     
  }
  
  onGetAllCategories (){
    this.categoryService.getCategories().subscribe(data=>{      
      this.categories = data._embedded.categories;
    },err=>{console.log(err)})
     
  }
  getCategory(i:number){
this.selectedCategory=this.categories[i];
    this.flag=this.selectedCategory.categoryId;
    this.title=this.selectedCategory.categoryName;
    this._router.navigate(['products/category',this.selectedCategory.categoryId],{state:this.commande})
    
    
  }
 

}
