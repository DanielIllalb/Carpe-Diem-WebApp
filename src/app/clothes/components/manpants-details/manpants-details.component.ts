import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-manpants-details',
  templateUrl: './manpants-details.component.html',
  styleUrl: './manpants-details.component.css'
})
export class ManpantsDetailsComponent implements OnInit {
  pantId: string | null = null;
  pantDetails: Clothes | undefined;
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
    this.pantId = this.route.snapshot.paramMap.get('id');

    if (this.pantId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.pantDetails = clothes.find((item) => item.id === this.pantId);
        console.log('Detalles del abrigo:', this.pantDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.pantDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.pantDetails!.id) {
      this.clothesService.updateBasket(this.pantDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/man/man-pants']);
  }
}
