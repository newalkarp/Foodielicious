import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItalianRecipesComponent } from './italian-recipes/italian-recipes.component';
import { ItalianListComponent } from './italian-recipes/italian-list/italian-list.component';
import { ItalianDetailComponent } from './italian-recipes/italian-detail/italian-detail.component';
import { ItalianDishComponent } from './italian-recipes/italian-list/italian-dish/italian-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItalianRecipesComponent,
    ItalianListComponent,
    ItalianDetailComponent,
    ItalianDishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
