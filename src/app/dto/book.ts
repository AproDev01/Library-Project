export interface Book{
    id:number;
    title:string;
    auteur:string;
    prix:number;
    image:string;
    quantite:number;
    quantiteGlobal:number;
    dejeAjeuter?:boolean;
}