import { Component } from '@angular/core';
import { ServicepanierService } from '../servicepanier.service';
import { Book } from '../dto/book';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private  serviceservice: ServiceService, private ServicepanierService:ServicepanierService){}
 
 listeLivre=0;
  ngOnInit() {
  this.ServicepanierService.panier$.subscribe(panier => {
    this.listeLivre = panier.length;
  });}
 
}
