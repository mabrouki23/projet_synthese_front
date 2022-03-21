import { CommandeProduct } from "./commandeProduct.model";

export class Commande {
    commandeId!: number;
    commandeType!: string;
    paymentType!: string;
    isPaid!: Boolean;
    isReady!: Boolean;
    inProgress!: Boolean;
    isCanceled!:  Boolean;
    isDelivered!:Boolean;
    totalPrice!: Number;
    taxPrice!: Number;
    commandeProducts: CommandeProduct[]=[];    
      
}
