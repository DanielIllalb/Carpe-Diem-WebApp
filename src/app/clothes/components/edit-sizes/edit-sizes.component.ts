import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-edit-sizes',
  templateUrl: './edit-sizes.component.html',
  styleUrl: './edit-sizes.component.css'
})
export class EditSizesComponent implements OnInit{

  selectedCloth: any = null; 
  newSize: string = ''; 
  newQuantity: number = 0; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clothesService: ClothesService
  ) {}
  


  ngOnInit(): void {
    const clothId = this.route.snapshot.paramMap.get('id'); // Obtener el ID desde la URL
    if (clothId) {
      this.loadClothDetails(clothId);
    }
  }

  loadClothDetails(id: string) {
    this.clothesService.getClothes().subscribe((clothes) => {
      this.selectedCloth = clothes.find((cloth) => cloth.id === id);
    });
  }

  addSizeToSelectedCloth() {
    if (this.newSize && this.newQuantity >= 0) {
      if (!this.selectedCloth.sizes.includes(this.newSize)) {
        this.selectedCloth.sizes.push(this.newSize);
        this.selectedCloth.quantity[this.newSize] = this.newQuantity;
      } else {
        alert('Esta talla ya existe. Usa el formulario para modificar su cantidad.');
      }
      // Limpiar los campos de entrada
      this.newSize = '';
      this.newQuantity = 0;
    } else {
      alert('Por favor, introduce una talla válida y una cantidad.');
    }
  }

  saveSizesAndQuantities() {
    if (this.selectedCloth) {
      const { id, sizes, quantity } = this.selectedCloth;
      this.clothesService
        .updateSizesAndQuantities(id, sizes, quantity)
        .then(() => {
          alert('Tallas y cantidades actualizadas correctamente');
          this.router.navigate(['/clothes/women/women-coats']); // Redirigir a la lista de prendas
        })
        .catch((error) => {
          console.error('Error al actualizar las tallas:', error);
          alert('Hubo un error al guardar los cambios.');
        });
    }
  }

}
