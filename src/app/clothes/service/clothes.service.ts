import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc, collectionData,doc,updateDoc,deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clothes } from '../interface/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  
  constructor(private firestore: Firestore) { }

  // Método para añadir prendas

  addClothes(clothes: Clothes) {
    const clothesRef = collection(this.firestore,'clothes');
    return addDoc(clothesRef,clothes);
  }

  // Método para obtener las prendas de la firestore

  getClothes():Observable<Clothes[]>{
    const clothesRef = collection(this.firestore,'clothes');
    return collectionData(clothesRef, {idField:'id'}) as Observable<Clothes[]>;
  }

  // Método para modificar las tallas y cantidades de una prenda

  updateSizesAndQuantities(id: string, sizes: string[], quantity: { [size: string]: number }) {
  const docRef = doc(this.firestore, `clothes/${id}`);
  return updateDoc(docRef, { sizes, quantity });
}


  // Método para eliminar una prenda
  
  deleteClothes(clothId: string) {
    const clothDocRef = doc(this.firestore, `clothes/${clothId}`);
    return deleteDoc(clothDocRef);
  }

  // Método para modificar el valor del carrito

  updateBasket(clothId: string, basketValue: boolean) {
    const clothDocRef = doc(this.firestore, `clothes/${clothId}`);
    return updateDoc(clothDocRef, { basket: basketValue });
  }
}
