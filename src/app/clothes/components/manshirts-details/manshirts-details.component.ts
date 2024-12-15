import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-manshirts-details',
  templateUrl: './manshirts-details.component.html',
  styleUrl: './manshirts-details.component.css'
})
export class ManshirtsDetailsComponent implements OnInit {
  shirtId: string | null = null;
  shirtDetails: Clothes | undefined;
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
    this.shirtId = this.route.snapshot.paramMap.get('id');

    if (this.shirtId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.shirtDetails = clothes.find((item) => item.id === this.shirtId);
        console.log('Detalles del abrigo:', this.shirtDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.shirtDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.shirtDetails!.id) {
      this.clothesService.updateBasket(this.shirtDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/man/man-shirts']);
  }
}
