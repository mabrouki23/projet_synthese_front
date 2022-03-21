import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande.model';
import { Product } from '../models/product.model';
import { ProductDto } from '../models/roductDto.model';

@Component({
  selector: 'app-traiter-commade',
  templateUrl: './traiter-commade.component.html',
  styleUrls: ['./traiter-commade.component.css']
})
export class TraiterCommadeComponent implements OnInit {
  products!:ProductDto[];
  commandesList$: any;
 
  constructor(private commandeService:CommandeService, private _router: Router,) { }
  ngOnInit(): void {  
    this.getAllCommandes()
    this.commandeService.RefreshRequired.subscribe(Response=>{      
      this.getAllCommandes()
    })
    
  }
getAllCommandes(){
  return this.commandeService.getAllcommandes().subscribe({
    next: data => {
      this.commandesList$=data._embedded.commandes;   
    },
    error: error => {
      console.error('There was an error!', error);
    }
  })
}
onGetCommandeProductDtosByCommande(commande:Commande){
this.commandeService.getProductDtosByCommande(commande.commandeId).subscribe(
data=>{
  this.products=data;
  this._router.navigate(['commandeProducts',commande.commandeId,'productDtos'],{state:this.products})
}
)
}
}
