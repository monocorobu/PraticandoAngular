import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SingleRecipesComponent } from './components/pages/single-recipes/single-recipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recipe', component:  SingleRecipesComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
