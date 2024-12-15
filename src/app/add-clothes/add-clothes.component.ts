import { Component } from '@angular/core';
import { FormArray, FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ClothesService } from '../clothes/service/clothes.service';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrl: './add-clothes.component.css'
})
export class AddClothesComponent {
  formulario: FormGroup;

  constructor(private fb:FormBuilder, private clothesService: ClothesService){
    this.formulario = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      gender: ['', [Validators.required]],
      type: ['', [Validators.required]],
      sizes: this.fb.array([]), // Almacena los tamaños seleccionados
      quantity: this.fb.group({}), // Mapea los tamaños con cantidades
      description: ['', [Validators.required, Validators.maxLength(500)]],
      basket: [false]
    });
  }

  /** Añadir tamaño al formulario */

  addSize(size: string): void {
    const sizesArray = this.formulario.get('sizes') as FormArray;
    const quantityGroup = this.formulario.get('quantity') as FormGroup;

    // Añade el tamaño si no existe
    if (!sizesArray.value.includes(size)) {
      sizesArray.push(new FormControl(size));
      quantityGroup.addControl(size, new FormControl(0, [Validators.required, Validators.min(0)]));
    }
  }

  /** Eliminar tamaño del formulario */

  removeSize(size: string): void {
    const sizesArray = this.formulario.get('sizes') as FormArray;
    const quantityGroup = this.formulario.get('quantity') as FormGroup;

    // Remueve el tamaño si existe
    const index = sizesArray.value.indexOf(size);
    if (index !== -1) {
      sizesArray.removeAt(index);
      quantityGroup.removeControl(size);
    }
  }

  /** Enviar datos al servicio */

  onSubmit(): void {
    if (this.formulario.valid) {
      this.formulario.patchValue({ basket: false });
      
      console.log(this.formulario.value);
      this.clothesService.addClothes(this.formulario.value).then(() => {
        alert('Prenda añadida con éxito');
        this.formulario.reset();
        // Reinicia el formulario
        (this.formulario.get('sizes') as FormArray).clear();
        this.formulario.setControl('quantity', this.fb.group({}));
      }).catch((error) => {
        console.error('Error al añadir la prenda:', error);
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
