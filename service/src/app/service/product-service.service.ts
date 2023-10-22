import {Product} from "../models/product";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  Products : Product [] =[
    { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { id: 2, code: 128,libelle: "PC", prixunitaire : 1000, tauxTva :20},
    { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ];

  GetAllProducts (){
    return this.Products;
  }
  getNbProductsByLibelle(libelle:string){
    return this.Products.filter(product =>product.libelle == libelle).length ;//la méthode filter pour créer un tableau contenant uniquement les produits ayant le libellé correspondant
                                                                                      //la méthode length est utilisée pour obtenir le nombre de produits correspondant au libellé dans ce tableau,

  }
}
