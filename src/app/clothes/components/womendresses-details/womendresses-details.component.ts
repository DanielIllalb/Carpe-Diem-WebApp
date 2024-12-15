import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-womendresses-details',
  templateUrl: './womendresses-details.component.html',
  styleUrl: './womendresses-details.component.css'
})
export class WomendressesDetailsComponent implements OnInit {
  dressId: string | null = null;
  dressesDetails: Clothes | undefined;
  selectedSize: string | null = null;
  selectedQuantity: number | null = null;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clothesService:ClothesService,
    private sharedService:SharedService
  ) {}

  ngOnInit():void {
    // Capturar el id de la ruta
    this.dressId = this.route.snapshot.paramMap.get('id');

    if (this.dressId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.dressesDetails = clothes.find((item) => item.id === this.dressId);
        console.log('Detalles del abrigo:', this.dressesDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.dressesDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.dressesDetails!.id) {
      this.clothesService.updateBasket(this.dressesDetails!.id, true).then(() => {
        alert('Producto añadido al carrito.');
      });
    }
  }
  
  onSelectionChange() {
    if (this.selectedSize && this.selectedQuantity) {
      this.sharedService.updateSelection(this.selectedSize, this.selectedQuantity);
    }
  }

  returnToMainPage() {
    this.router.navigate(['clothes/women/women-dresses']);
  }
}
