import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande.model';
import { CommandeProduct } from '../models/commandeProduct.model';
import { CommProd } from '../models/commProd.model';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {
  commande!: Commande;
  commandePoducts!: CommandeProduct[];
  commProd!: CommProd;
  totalPrice: number = 0;
  taxPrice!: Number;
  panierForm!: FormGroup;
  selectedCommandeProduct!: CommandeProduct;
  quantite!: number;
  cpt: number = 0;
  qte1!: number;
  qte2!: number;

  constructor(private _router: Router, private _activtedRoute: ActivatedRoute, private commandeService: CommandeService, private formBuilder: FormBuilder) {
    this.panierForm = this.formBuilder.group({
      quantite: 1
    });
    this.commande = this._router.getCurrentNavigation()!.extras.state as Commande;
    this.commandePoducts = this.commande.commandeProducts;
    this.totalPrice = 0
    for (let index = 0; index < this.commandePoducts.length; index++) {
      const element = this.commandePoducts[index];
      this.totalPrice = this.totalPrice + element.quantite * element.product.price;
      this.commProd = new CommProd();
      this.commProd.commandeId = this.commande.commandeId
      this.commProd.productId = element.product.productId
      this.commProd.quantite = element.quantite
      this.commandePoducts[index].quantite = element.quantite
    }
    //total price apres tax
    this.totalPrice = this.totalPrice * (1 + 0.17);
    this.taxPrice = this.totalPrice * 0.17
  }

  ngOnInit(): void {
  }
  onDeleteCommandeProduct(i: number) {
    this.selectedCommandeProduct = this.commandePoducts[i];
    for (let index = 0; index < this.commandePoducts.length; index++) {
      const element = this.commandePoducts[index];
      if (this.selectedCommandeProduct.product.productId === element.product.productId) {
        this.commandePoducts.splice(index, 1)
      }
    }
    this.totalPrice = 0;
    for (let index = 0; index < this.commandePoducts.length; index++) {
      const element = this.commandePoducts[index];
      this.totalPrice = this.totalPrice + element.quantite * element.product.price;
    }
    this.taxPrice = this.totalPrice * 0.17
    this.totalPrice = this.totalPrice * (1 + 0.17);
    this.commande.totalPrice = this.totalPrice;

  }
  onConfirmerCommade() {
    //accumulation du quntite du meme produit dans un unique product   

    for (let index = 0; index < this.commandePoducts.length-1; index++) {
     
      for (let index1 = index+1; index1 < this.commandePoducts.length; index1++) {
    
        if (this.commandePoducts[index].product.productId == this.commandePoducts[index1].product.productId) {
          this.commandePoducts[index].quantite = this.commandePoducts[index].quantite + this.commandePoducts[index1].quantite
          
          this.commandePoducts.splice(index1 , 1)
          //pour garder la place jusqu au condition contraire
          index1=index1-1;
        }
      }
     
    }
    console.log(this.commandePoducts)

    for (let index = 0; index < this.commandePoducts.length; index++) {
      const element = this.commandePoducts[index];
      this.commProd = new CommProd();
      this.commProd.commandeId = this.commande.commandeId
      this.commProd.productId = element.product.productId
      this.commProd.quantite = element.quantite
      
      this.commandeService.saveOrderProduct(this.commProd).subscribe({
        next: data => {
console.log(data)
        },
        error: error => {          
          console.error('There was an error!', error);
        }
      })
    }
    const body = {
      commandeId: this.commande.commandeId,
      commandeType: "importe",
      isPaid: true,
      paymentType: "cach",
      totalPrice: this.totalPrice,
      taxPrice: this.totalPrice * 0.17
    }
    this.commandeService.saveCommande(body).subscribe({
      next: data => {

      },
      error: error => {

        console.error('There was an error!', error);
      }
    })
    this._router.navigate(['home'])
  }
  onModifierCommandeProduct(i: number) {
    this.selectedCommandeProduct = this.commandePoducts[i];
    this.quantite = this.panierForm.get("quantite")?.value;
    this.selectedCommandeProduct.quantite = this.quantite;
    //reclculer le prix total puis mettre a jour le prix dans la commande
    this.commandePoducts[i].quantite = this.quantite;
    this.totalPrice = 0;
    for (let index = 0; index < this.commandePoducts.length; index++) {
      const element = this.commandePoducts[index];
      this.totalPrice = this.totalPrice + element.quantite * element.product.price;
    }
    this.totalPrice = this.totalPrice * (1 + 0.17);
    this.taxPrice = this.totalPrice * 0.17
    this.commande.totalPrice = this.totalPrice
    //todo
    //appel a la methode qui update la commande....to
    this.ngOnInit()
  }

  updateCommande(commande: Commande, commandeId: number) {

  }

}
