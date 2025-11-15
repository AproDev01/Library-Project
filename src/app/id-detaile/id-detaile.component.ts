import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService } from '../service.service';
import { ServicepanierService } from '../servicepanier.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../dto/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-id-detaile',
  templateUrl: './id-detaile.component.html',
  styleUrls: ['./id-detaile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,      // pour *ngIf, ngFor, class bindings
    RouterModule       // pour routerLink
  ]
})
export class IdDetaileComponent implements OnInit {
  livre: Book | undefined;

  constructor(
    private serviceservice: ServiceService,
    private route: ActivatedRoute,
    private panierService: ServicepanierService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.livre = this.serviceservice.getlisteLivreByTitle(id);
  }

  addToCart(): void {
    if (this.livre) {
      this.panierService.addpanier(this.livre);
      this.toastr.success(`${this.livre.title} ajouté au panier`);
    }
  }
}
