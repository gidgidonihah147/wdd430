import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }
  
}
