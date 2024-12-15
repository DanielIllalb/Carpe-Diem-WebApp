import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';


@Component({
  selector: 'app-mansweaters-details',
  templateUrl: './mansweaters-details.component.html',
  styleUrl: './mansweaters-details.component.css'
})
export class MansweatersDetailsComponent implements OnInit {
  sweaterId: string | null = null;
  sweaterDetails: Clothes | undefined;
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
        this.sweaterDetails = clothes.find((item) => item.id === this.sweaterId);
        console.log('Detalles del abrigo:', this.sweaterDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.sweaterDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.sweaterDetails!.id) {
      this.clothesService.updateBasket(this.sweaterDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/man/man-sweaters']);
  }
}
