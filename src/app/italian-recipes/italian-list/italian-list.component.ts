import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes.model';

@Component({
  selector: 'app-italian-list',
  templateUrl: './italian-list.component.html',
  styleUrls: ['./italian-list.component.css']
})
export class ItalianListComponent implements OnInit {
  italianRecipes: Recipe[] = [
    new Recipe('Chicken Penne Alfredo','Simply a test',"https://upload.wikimedia.org/wikipedia/commons/b/bc/Pasta_with_a_Chicken_Lemon_Cream_Sauce_%28764644143%29.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
