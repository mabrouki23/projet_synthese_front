import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande.model';

import { CommandeProduct } from '../models/commandeProduct.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commande!: Commande;
  savedCommande!: Commande;
  commandeProduct!: CommandeProduct;
  
  constructor(private _router:Router,private commandeService:CommandeService) { }

  ngOnInit(): void {
    
  }
  startCommande(){
    this.commande=new Commande();     
    this.commande.inProgress=true; 
    
     
    //creation du commande et avoir le id du commande
    this.commandeService.saveOrder(this.commande).subscribe({
      next: data => {
        this.commande.commandeId = data.commandeId;
        console.log(this.commande.commandeId)
    },
    error: error => {
        
        console.error('There was an error!', error);
    }
   
  });
       
    this._router.navigate(['/categories'],{state:this.commande})
    console.log("start commande")
  }

}
