import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);


  }
}
