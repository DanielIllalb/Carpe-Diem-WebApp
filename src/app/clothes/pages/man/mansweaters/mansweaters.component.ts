import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../../../service/clothes.service';
import { Clothes } from '../../../interface/clothes';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-mansweaters',
  templateUrl: './mansweaters.component.html',
  styleUrl: './mansweaters.component.css'
})
export class MansweatersComponent implements OnInit {
  clothes!: Clothes[];
  isAdmin: boolean = false;
  filteredClothes!: Clothes[];
  paginatedClothes!: Clothes[];
  itemsPerPage: number = 6;
  page: number = 1;

  constructor(private clothesService: ClothesService,
              private userService: UserService
              ) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe((clothes) => {
      // Filtrar solo las prendas de tipo 'women-coats'
      this.filteredClothes = clothes.filter((cloth) => cloth.type.includes('man-sweaters'));
      this.updatePaginatedClothes();
    });

    this.checkAdminStatus();
  }
  
  // función para eliminar una prenda

  deleteClothes(clothId: string) {
    this.clothesService.deleteClothes(clothId).then(() => {
      // Actualiza la lista local tras eliminar el producto
      this.filteredClothes = this.filteredClothes.filter((cloth) => cloth.id !== clothId);
      this.updatePaginatedClothes();
      alert('Prenda borrada exitosamente');
    }).catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
  }

  async checkAdminStatus() {
    this.isAdmin = await this.userService.getAdminStatus();
  }

  /** Paginación  */

  updatePaginatedClothes(): void {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedClothes = this.filteredClothes.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    this.page = newPage;
    this.updatePaginatedClothes();
  }

}
