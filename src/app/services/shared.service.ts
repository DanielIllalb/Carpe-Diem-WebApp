import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedSize = new BehaviorSubject<string | null>(null);
  private selectedQuantity = new BehaviorSubject<number | null>(null);

  selectedSize$ = this.selectedSize.asObservable();
  selectedQuantity$ = this.selectedQuantity.asObservable();

  updateSelection(size: string, quantity: number) {
    this.selectedSize.next(size);
    this.selectedQuantity.next(quantity);
  }
}
