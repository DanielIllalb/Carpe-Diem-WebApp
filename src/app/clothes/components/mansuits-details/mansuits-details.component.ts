import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Clothes } from '../../interface/clothes';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-mansuits-details',
  templateUrl: './mansuits-details.component.html',
  styleUrl: './mansuits-details.component.css'
})
export class MansuitsDetailsComponent implements OnInit {
  suitId: string | null = null;
  suitDetails: Clothes | undefined;
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
    this.suitId = this.route.snapshot.paramMap.get('id');

    if (this.suitId) {
      this.clothesService.getClothes().subscribe((clothes) => {
        this.suitDetails = clothes.find((item) => item.id === this.suitId);
        console.log('Detalles del abrigo:', this.suitDetails);
      });
    }
  }

  isButtonDisabled(): boolean {
    return (
      !this.selectedSize ||
      !this.selectedQuantity ||
      this.selectedQuantity > this.suitDetails!.quantity[this.selectedSize]
    );
  }

  addToCart() {
    if (this.suitDetails!.id) {
      this.clothesService.updateBasket(this.suitDetails!.id, true).then(() => {
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
    this.router.navigate(['clothes/man/man-suits']);
  }
}
