import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { developmentServer } from '../Environment/development';
import { Product, ProductBackend } from '../models/product.model';
import { ProductAdapter } from '../adapters/product-adapter';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private server = developmentServer;
  private backendUrl = this.server.serverURL;
  private apiUrl = this.server.apiLink;

constructor(private httpClient: HttpClient) { }

  getTrendyProducts():Observable<Product[]>{
    return this.httpClient.get<ProductBackend[]>(`${this.backendUrl}${this.apiUrl}/getTrendyProducts`).pipe(
      map((rows)=> rows.map( row=> ProductAdapter.adaptProduct(row)))
    )
  }

  
}
