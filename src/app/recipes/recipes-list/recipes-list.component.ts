import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'Something Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNY4bGXQkWgEz2KN_BDNCXGTqLWs_RlWm6WXy4nVe&s'
    ),
    new Recipe(
      'A Test',
      'Something Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNY4bGXQkWgEz2KN_BDNCXGTqLWs_RlWm6WXy4nVe&s'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

