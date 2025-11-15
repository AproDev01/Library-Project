import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuileComponent } from './acceuile/acceuile.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { IdDetaileComponent } from './id-detaile/id-detaile.component';
import { AjouterAuPanierComponent } from './ajouter-au-panier/ajouter-au-panier.component';
const routes: Routes = [
   {path:'',redirectTo:"acceuille", pathMatch:"full"},
      {path:'books',component:CatalogueComponent},
       {path:'detail/:id',component:IdDetaileComponent},
         {path:'acceuille',component:AcceuileComponent},
         {path:'panier',component:AjouterAuPanierComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
