import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ServicepanierService } from '../servicepanier.service';
import { Book } from '../dto/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-au-panier',
  imports:[FormsModule,CommonModule],
  templateUrl: './ajouter-au-panier.component.html',
  styleUrls: ['./ajouter-au-panier.component.scss'],
  standalone: true
})
export class AjouterAuPanierComponent implements OnInit {
  livre: Book[] = [];

  constructor(
    private serviceService: ServiceService,
    private panierService: ServicepanierService
  ) {}

  ngOnInit() {
    this.panierService.panier$.subscribe((data) => {
      this.livre = data;
    });
  }
ligneTotal(l: Book): number {
  const q = Number(l.quantite) || 0;
  const p = Number(l.prix) || 0;
  return q * p;
}
  // Calcul automatique du total
  get totalGeneral(): number {
    return this.livre.reduce((total, l) => {
      const q = Number(l.quantite) || 0;
      const p = Number(l.prix) || 0;
      return total + q * p;
    }, 0);
  }

  // Reste en stock
  reste(l: Book) {
    return (l.quantiteGlobal || 0) - (l.quantite || 0);
  }

  // Quand la quantité change
  onQuantiteChange(l: Book, value: any) {
    let q = Number(value);
    if (q < 1) q = 1;
    if (q > l.quantiteGlobal) q = l.quantiteGlobal;
    l.quantite = q;
    this.panierService.update(l); 
  }

  // Supprimer un livre
  remove(l: Book) {
    this.panierService.removePanier(l.id);
  }
}
