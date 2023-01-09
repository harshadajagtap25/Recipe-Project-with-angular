import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'Something Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNY4bGXQkWgEz2KN_BDNCXGTqLWs_RlWm6WXy4nVe&s'
    ),
    new Recipe(
      'A Test 2',
      'Something Test 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNY4bGXQkWgEz2KN_BDNCXGTqLWs_RlWm6WXy4nVe&s'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSeleted(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
