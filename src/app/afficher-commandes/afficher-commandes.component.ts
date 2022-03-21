import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Product } from '../models/product.model';
import { ProductDto } from '../models/roductDto.model';

@Component({
  selector: 'app-afficher-commandes',
  templateUrl: './afficher-commandes.component.html',
  styleUrls: ['./afficher-commandes.component.css']
})
export class AfficherCommandesComponent implements OnInit {
  products!: ProductDto[];
  commandeId!: number;
  constructor(private commandeService:CommandeService,private _router:Router,private _activtedRoute:ActivatedRoute) {
    this.products=this._router.getCurrentNavigation()!.extras.state as ProductDto[];
    this.commandeId=this._activtedRoute.snapshot.params['commandeId']
    console.log(this.commandeId)
   }

  ngOnInit(): void {
this.getProductsByCommande()

  }
getProductsByCommande(){

 this.commandeService.getProductDtosByCommande(this.commandeId).subscribe(
   data=>{
    this.products= data; console.log(data),console.log(data)
   
   }
 )
}

}
