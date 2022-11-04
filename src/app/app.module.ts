import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodCardComponent } from './components/pages/home/food-card/food-card.component';
import { SingleRecipesComponent } from './components/pages/single-recipes/single-recipes.component';
import { MainInformationComponent } from './components/pages/single-recipes/main-information/main-information.component';
import { SimilarRecipesComponent } from './components/pages/single-recipes/similar-recipes/similar-recipes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    FoodCardComponent,
    SingleRecipesComponent,
    MainInformationComponent,
    SimilarRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
