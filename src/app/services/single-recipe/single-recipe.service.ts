import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=bb789ac334a345df8352743b32152662`

    return this.http.get(apiUrl);
  }


  takeSimilarRecipe (id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=bb789ac334a345df8352743b32152662`

    return this.http.get(apiUrl);
  }


}
