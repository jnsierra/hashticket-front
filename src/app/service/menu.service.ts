import { Injectable, OnInit } from "@angular/core";
import { Menu } from "../entities/menu";

@Injectable({
    providedIn: 'root'
  })
export class MenuService{
    itemsMenu:Menu[];
    constructor(){
        this.itemsMenu = [];
        this.generateMenu();
    }
    generateMenu(){
        this.itemsMenu.push(this.createItem("Eventos","/event"));
        this.itemsMenu.push(this.createItem("Categorias evento","/eventCategory"));
        this.itemsMenu.push(this.createItem("Configuración de costo","/zoneConfig"));
        this.itemsMenu.push(this.createItem("Categorias","/category"));
        this.itemsMenu.push(this.createItem("Zonas","/zone"));
        this.itemsMenu.push(this.createItem("Artistas","/artist"));
        this.itemsMenu.push(this.createItem("Bandas musicales","/musicBand"));
        this.itemsMenu.push(this.createItem("Tickets","/tickets"));
    }
    createItem(name:string, url:string): Menu{
        const item = new Menu();
        item.name = name;
        item.url = url;
        return item;
    }
  }