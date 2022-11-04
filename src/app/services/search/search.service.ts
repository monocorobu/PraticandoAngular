import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string){
    const apiUrl =` https://api.spoonacular.com/recipes/complexSearch?apiKey=bb789ac334a345df8352743b32152662&query=${query}&number=10`

    return this.http.get(apiUrl)
  }
}
