import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { ContainerCocktailComponent } from "./container-cocktail/container-cocktail.component";
import { CocktailDetailsComponent } from "./container-cocktail/cocktail-details/cocktail-details.component";
import { CocktailListComponent } from "./container-cocktail/cocktail-list/cocktail-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    ContainerCocktailComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
