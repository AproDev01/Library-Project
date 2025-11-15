import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './dto/book';
import { ServiceService } from './service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServicepanierService {

  constructor(private toastr: ToastrService){}

  public paniersubject= new BehaviorSubject<Book[]>([]);
  panier$=this.paniersubject.asObservable();

  addpanier(paniera: Book) {
    const current = this.paniersubject.value; //recuperer le panier actuelle
  // this.paniersubject.next([...current, paniera]);ajeuter le livre
   // Vérifier si le livre existe déjà
    const exist = current.find(l => l.id === paniera.id);
    if (exist){
      // Incrémenter la quantité si déjà dans le panier
      exist.quantite += 1;
      this.paniersubject.next([...current]);
    } else {
      // Sinon, ajouter le livre 
      this.paniersubject.next([...current, { ...paniera, quantite: 1 }]);
    }
  }
  update(book: Book) {
  const current = this.paniersubject.value;
  const index = current.findIndex(b => b.id === book.id);
  if (index !== -1) {
    current[index] = { ...book }; // Met à jour l'objet
    this.paniersubject.next([...current]); // Émettre une nouvelle valeur
  }
}
 
  removePanier(id: number) {
    const current = this.paniersubject.value;
    this.paniersubject.next(current.filter(b => b.id !== id));
  }
}