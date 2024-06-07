import { Component, Directive, inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

 title = 'CATÁLOGO DE PRODUCTOS';
 http = inject(HttpClient);
 products: Product[] = [];
 
 url_api ="https://fakestoreapi.com/products";

 ngOnInit(){ //Este metodo se ejecuta automaticamente al cargar la App
  this.loadProducts();
 }

 loadProducts(){
  this.http.get<Product[]>(this.url_api).subscribe((data) => {
    this.products = data;
  });
 }
}
