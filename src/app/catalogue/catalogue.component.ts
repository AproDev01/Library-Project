import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Book } from '../dto/book';
import { ServicepanierService } from '../servicepanier.service';
import { RouterModule } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports:[RouterModule,CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
})
export class CatalogueComponent {
  constructor(
    private serviceservice: ServiceService,
    private panierservice: ServicepanierService,
    private toastr: ToastrService
  ) {}
  page: number = 1;
totalPages: number = 1;
  prix: number = 0;
  alertvisible = false;
  dejaAjeute = false;
  listeLivre: Book[] = [];
  a=0;
  ngOnInit() {
    this.listeLivre = this.serviceservice.getlisteLivre();
      this.totalPages = Math.ceil(this.listeLivre.length / 4);


  }

  prevPage() {
  if (this.page > 1) {
    this.page--;
  }
}
nextPage() {
  if (this.page < this.totalPages) {
    this.page++;
  }
}

  ajouterAuPanier(livre: any) {
    // Vérifier si le livre est déjà dans le panier
    const panierActuel = this.panierservice.paniersubject.value; // récupérer la valeur actuelle
    const dejapresent = panierActuel.find((item) => item.id === livre.id);
    this.panierservice.addpanier(livre);
    if (dejapresent) {
      this.dejaAjeute = true;
      setTimeout(() => (this.dejaAjeute = false), 2000);
    } else {  
     // this.panierservice.addpanier(livre); ajoute au panier
      this.alertvisible = true;
      setTimeout(() => (this.alertvisible = false), 2000);
    }
  }
}
