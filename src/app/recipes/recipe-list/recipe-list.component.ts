import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe("A Test Recipe","This is a test",
      "https://live.staticflickr.com/20/73788478_8c020e3a14_b.jpg"
    ),
    new Recipe("A Second Test Recipe","This is a second test",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Leip%C3%A4juusto-3479.jpg"
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
