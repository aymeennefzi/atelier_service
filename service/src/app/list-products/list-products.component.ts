import {Component, OnInit} from '@angular/core';

import {Product} from "../models/product";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers :[ProductServiceService]
})
export class ListProductsComponent implements OnInit{
  Listproducts : Product [] =[] ;
  productCount: number = 0;

  constructor(private productservice : ProductServiceService) {
  }

  ngOnInit() {
    this.Listproducts = this.productservice.GetAllProducts() ;
  }
  calculproduct (libelle : string){
    this.productCount=this.productservice.getNbProductsByLibelle(libelle)
  }




}
