import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherCommandesComponent } from './afficher-commandes/afficher-commandes.component';
import { CategoryComponent } from './category/category.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TraiterCommadeComponent } from './traiter-commade/traiter-commade.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'commandeClient', component: CommandeClientComponent },
  { path: 'products/category/:id', component: ProductComponent },
  { path: 'traiterCommande', component: TraiterCommadeComponent},
  { path: 'commandeProducts/:commandeId/products', component: AfficherCommandesComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
