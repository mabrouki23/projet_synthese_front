import { Category } from "./category.model";
import { CommandeProduct } from "./commandeProduct.model";


export class Product {
    productId!: number;
    productName!: String;
    description!: String;
    image!: String;
    data?: string | null;
    price!: number;
    calorie!: number;
    category!: Category;
    commandeProducts: CommandeProduct[]=[];
}
