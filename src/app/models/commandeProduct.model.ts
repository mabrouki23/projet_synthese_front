import { Commande } from "./commande.model";
import { Product } from "./product.model";

export class CommandeProduct {
  commande!:Commande;
  product!: Product;
  quantite: number=1;   
   
      
}