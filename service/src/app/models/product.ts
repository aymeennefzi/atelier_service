export class Product {
  id : number ;
  code : number ;
  libelle : string;
  prixunitaire : number ;
  tauxTva : number ;
  constructor(id: number , code : number , libelle : string , prixunitaire : number , tauxTva : number) {
    this.id =id ;
    this.code =code ;
    this.libelle =libelle ;
    this.prixunitaire =prixunitaire ;
    this.tauxTva =tauxTva ;
  }
}
