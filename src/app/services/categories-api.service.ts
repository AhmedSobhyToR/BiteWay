import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category, CategoryBackend } from '../models/category.model';
import { developmentServer } from '../Environment/development';
import { CategoryAdapter } from '../adapters/category-adapter';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  private server = developmentServer;
  private backendUrl = this.server.serverURL;
  private apiUrl = this.server.apiLink;

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<CategoryBackend[]>(`${this.backendUrl}${this.apiUrl}/getCategories`).pipe(
      map(rows => rows.map(row=> CategoryAdapter.adaptCategory(row))
    ))
  }
}
