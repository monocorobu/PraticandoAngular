import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=bb789ac334a345df8352743b32152662&number=${take}`;

   
    return this.http.get(apiUrl);
  }

}
