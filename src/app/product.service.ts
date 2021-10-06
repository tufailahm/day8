import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from './model/product';
import { retry, catchError } from 'rxjs/operators';

const productURL = "http://localhost:9090/product"


@Injectable({
  providedIn: 'root'
})

export class ProductService {


  //DI
  constructor(public httpClient: HttpClient) { }

  /*
  This is getting all the records from the backend
  */
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }


    /*
  This is deleteing a single record from the backend
  */
  deleteProduct(productId:number): Observable<Product> {
    return this.httpClient.delete<Product>(`${productURL}/${productId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

    /*
  This is getting single record records from the backend
  */
  getProduct(productId:number): Observable<Product> {
    return this.httpClient.get<Product>(`${productURL}/${productId}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

    /*
  This is getting all the records from the backend
  */
   addProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(productURL,product)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

      /*
  This is getting all the records from the backend
  */
  updateProduct(product:Product): Observable<Product> {
    return this.httpClient.put<Product>(productURL,product)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }




  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
