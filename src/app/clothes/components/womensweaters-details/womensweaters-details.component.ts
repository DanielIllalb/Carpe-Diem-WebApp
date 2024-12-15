import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-womensweaters-details',
  templateUrl: './womensweaters-details.component.html',
  styleUrl: './womensweaters-details.component.css'
})
export class WomensweatersDetailsComponent {

  sweaterId: string | null = null;
  sweatersDetails: Clothes | undefined;
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
    this.sweaterId = this.route.snapshot.paramMap.get('id');

    if (this.sweaterId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.sweatersDetails = clothes.find((item) => item.id === this.sweaterId);
        console.log('Detalles del abrigo:', this.sweatersDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.sweatersDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.sweatersDetails!.id) {
      this.clothesService.updateBasket(this.sweatersDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/women/women-sweaters']);
  }
}
