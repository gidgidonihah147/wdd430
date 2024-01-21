import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uNPEoHkwibPyJHmy8Z8hyNuodzblNqkSiw&usqp=CAU'),
    new Recipe('Test', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uNPEoHkwibPyJHmy8Z8hyNuodzblNqkSiw&usqp=CAU')

  ];

    constructor() { }

    ngOnInit(): void {
        
    }
}
