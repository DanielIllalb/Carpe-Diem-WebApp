import { Component,OnInit } from '@angular/core';
import { Clothes } from '../../../clothes/interface/clothes';
import { ClothesService } from '../../../clothes/service/clothes.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {

  basketClothes: Clothes[] = [];
  selectedSize: string | null = null;
  selectedQuantity: number | null = null;

  constructor(private clothesService: ClothesService, private sharedService:SharedService){}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe((clothes) => {
      this.basketClothes = clothes.filter((cloth) => cloth.basket);
    });

    this.sharedService.selectedSize$.subscribe((size) => {
      this.selectedSize = size;
    });

    this.sharedService.selectedQuantity$.subscribe((quantity) => {
      this.selectedQuantity = quantity;
    });
  }

  // Método para eliminar un producto del carrito

  deleteToCart(clothId: string): void {
    this.clothesService.updateBasket(clothId, false).then(() => {
      this.basketClothes = this.basketClothes.filter((cloth) => cloth.id !== clothId);
      alert('Producto eliminado del carrito.');
    }).catch((error) => {
      console.error('Error al eliminar el producto del carrito:', error);
    });
  }
}
