import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-womentshirts-details',
  templateUrl: './womentshirts-details.component.html',
  styleUrl: './womentshirts-details.component.css'
})
export class WomentshirtsDetailsComponent {
  tshirtId: string | null = null;
  tshirtDetails: Clothes | undefined;
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
    this.tshirtId = this.route.snapshot.paramMap.get('id');

    if (this.tshirtId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.tshirtDetails = clothes.find((item) => item.id === this.tshirtId);
        console.log('Detalles del abrigo:', this.tshirtDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.tshirtDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.tshirtDetails!.id) {
      this.clothesService.updateBasket(this.tshirtDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/women/women-t-shirts']);
  }
}
