import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './/app-routing.module';
import { AddCocktailModule } from './add-cocktail/add-cocktail.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HeaderModule } from './header/header.module';
import { InMemoryDataService } from './in-memory-data.service';
import { RecipeService } from './recipe.service';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule,
    CustomMaterialModule,
    AppRoutingModule,
    HeaderModule,
    RecipeModule,
    AddCocktailModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
