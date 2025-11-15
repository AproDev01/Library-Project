import { Injectable } from '@angular/core';
import { Book } from './dto/book';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 listeLivre:Book[] = [
  { id:1,title:  'Algèbre: Des polynômes aux applications linéaires', auteur: 'François Cottet-Emard', prix: 16.9, quantite:0,quantiteGlobal: 10,image:"img1.png"},
    {id:2, title:  'Analyse: Concepts et contextes. Volume 1 : Fonctions d une variable', auteur: 'James Stewart', quantite: 0 ,quantiteGlobal: 10,prix: 69.9,image:"img2.png"},
    { id:3,title:  'Mathématiques pour l’agrégation externe. Probabilités', auteur: 'Walter Appel',quantite: 0,quantiteGlobal:10, prix: 37.9,image:"img3.png"},
    { id:4,title:  'COURS ELEMENTAIRE DE MATHEMATIQUES SUPERIEURES - TOME 4', auteur: 'QUINET J.',quantite: 0,quantiteGlobal:10, prix: 78.28,image:"img4.png"},
    { id:5,title:  'Mathématiques supérieures, volume 2. Pour ingénieurs et polytechniciens - Couverture souple', auteur: 'De Boeck - Wesmael',quantite: 0,quantiteGlobal:10, prix: 57.9,image:"img5.png"},
    { id:6,title:  'Mathématiques supérieures et première année universitaire Tome 1', auteur: 'Jacques Pichon',quantite: 0,quantiteGlobal:10, prix: 16.5,image:"img6.png"},
    { id:7,title:  'Mathématiques Supérieures Et Spéciales Tome 5 - Analyse Fonctionnelle ', auteur: ' Lehning',quantite: 0,quantiteGlobal:10, prix: 45,image:"img7.png"},
    { id:8,title:  'Analyse fonctionnelle - Théorie et applications: Théorie et applications ', auteur: 'Haïm Brezis',quantite: 0,quantiteGlobal:10, prix: 31,image:"img8.png"},
    

  ];
getlisteLivre() {
    return this.listeLivre;
  }
getlisteLivreByTitle(id: number): Book | undefined {
  return this.listeLivre.find(l => l.id === id);
}

  
} 