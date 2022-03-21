import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from '../models/product.model';
import { CommandeProduct } from '../models/commandeProduct.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DialogOtherCategroyComponent } from '../dialog-other-categroy/dialog-other-categroy.component';
import { CommandeService } from '../commande.service';
import { CommProd } from '../models/commProd.model';






@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]=[];
  selectedProductsList: Product[]=[];
  selectedProduct!: Product;
  commande!: any;
  commandeProduct!:CommandeProduct;
  categoryId!: any;
  value:number=1;
  commProd!: CommProd;
  existe: boolean=true;
  constructor(private categoryService:CategoryServiceService,
    private _activtedRoute :ActivatedRoute,private _router:Router,private dialog:MatDialog,
    private commandeService:CommandeService ){   
      this.commande=this._router.getCurrentNavigation()!.extras.state;   

     }  

  ngOnInit(): void {
    this.categoryId=this._activtedRoute.snapshot.params['id']
    this.getAllProductsByCategory();    

  }

  getAllProductsByCategory(){
    this.categoryService.getProductsByCategoryId(this.categoryId).subscribe(
      data=>{
        this.products=data._embedded.products;
        console.log(data._embedded.products);
      },err=>{console.log(err)}
    );
  }
addProductToCommande(product:Product){
  this.commandeProduct=new CommandeProduct();  
  //rechercher le produit dans le tableau s'il existe mettre a jour la qantite sinon add le produit au tableau
  this.commandeProduct.product=product;
  //initialiser la qunatite par la valeur 1 
  this.commandeProduct.quantite=1
  //todo pour entrer la quantite   
  this.commande.commandeProducts!.push(this.commandeProduct); 
  this.openDialog();  
  }
  openDialog() {  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 

   let dialogRef=this.dialog.open(PopUpComponent,{data:this.value})
   dialogRef.afterClosed().subscribe(res => {
    // received data from dialog-component
    console.log(res.data)
    console.log(this.commande.commandeId);
    this.commandeProduct.quantite=res.data; 
    this.openDialogOtherCategory()
  }) 
  
}
openDialogOtherCategory() {
  let dialogRef = this.dialog.open(DialogOtherCategroyComponent, { data: { name: 'Vishwas' } })
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if (result==2) {
      this._router.navigate(['/categories'],{state:this.commande})
    }
    if (result==3) {
      this._router.navigate(['/commandeClient'],{state:this.commande})
    }      
    
  });
}



}
