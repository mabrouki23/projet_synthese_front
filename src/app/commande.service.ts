import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Observable, Subject, tap} from 'rxjs';
import { Commande } from './models/commande.model';
import { CommandeProduct } from './models/commandeProduct.model';
import { CommProd } from './models/commProd.model';
import { Product } from './models/product.model';
import { ProductDto } from './models/roductDto.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
private _refreshRequired=new Subject<void>()
get RefreshRequired(){
  return this._refreshRequired
}
  constructor(private httpClient:HttpClient) { }
  saveOrder(commande: Commande):Observable<Commande> {    
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {headers: httpHeaders};       
          
    return this.httpClient.post<Commande>("http://localhost:8080/commandes", commande,options)

  }

  saveOrderProduct(commProd: CommProd):Observable<CommProd> {
    
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {headers: httpHeaders};        
          
    return this.httpClient.post<CommProd>("http://localhost:8080/commandeProducts", commProd,options)

  }
  saveCommande(body: any):Observable<Commande> {
    
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {headers: httpHeaders};        
          
    return this.httpClient.post<Commande>("http://localhost:8080/commandes", body,options).pipe(
      tap(()=>{this.RefreshRequired.next()})
    )

  }
  deleteCommande(commandeId:number,productId:number):Observable<CommandeProduct> {      
    console.log("http://localhost:8080/api/commandeProducts/"+commandeId+"/"+productId)
return this.httpClient.delete<CommandeProduct>("http://localhost:8080/api/commandeProducts/"+commandeId+"/"+productId);

}
modifierCommandeProduct(commandeProduct:CommandeProduct,commandeId:number,productId:number):Observable<CommandeProduct> {      
  console.log("http://localhost:8080/api/commandeProducts/"+commandeId+"/"+productId)
return this.httpClient.put<CommandeProduct>("http://localhost:8080/api/commandeProducts/"+commandeId+"/"+productId,commandeProduct);
}
modifierCommande(body:any,commandeId:number):Observable<Commande> {     

return this.httpClient.put<Commande>("http://localhost:8080/commandes/"+commandeId,body);
}

getAllcommandes():Observable<any>{
  return this.httpClient.get<any>("http://localhost:8080/commandes")
}

getProductsByCommande(commandeId:number):Observable<Product[]>{
  console.log(commandeId)
return this.httpClient.get<Product[]>("http://localhost:8080/api/commandeProducts/"+commandeId+"/products")
}

getProductDtosByCommande(commandeId:number):Observable<ProductDto[]>{
  console.log(commandeId)
return this.httpClient.get<ProductDto[]>("http://localhost:8080/api/commandeProducts/"+commandeId+"/productDtos")
}

}
