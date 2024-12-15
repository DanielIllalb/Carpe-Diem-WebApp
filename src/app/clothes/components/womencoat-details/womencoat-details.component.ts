import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-womencoat-details',
  templateUrl: './womencoat-details.component.html',
  styleUrl: './womencoat-details.component.css'
})
export class WomencoatDetailsComponent implements OnInit {

  coatId: string | null = null;
  coatDetails: Clothes | undefined;
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
    this.coatId = this.route.snapshot.paramMap.get('id');

    if (this.coatId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.coatDetails = clothes.find((item) => item.id === this.coatId);
        console.log('Detalles del abrigo:', this.coatDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.coatDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.coatDetails!.id) {
      this.clothesService.updateBasket(this.coatDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/women/women-coats']);
  }
}  
