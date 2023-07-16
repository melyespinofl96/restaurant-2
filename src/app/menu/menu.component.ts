import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  menu = true
  appetizers = false
  soupsAndSalads = false
  tacos = false
  enchiladas = false
  desserts = false
  beverages = false

  ngOnInit(): void {
    this.menuToggle();
  }

  menuToggle(){
    this.menu = true
    this.appetizers = false
    this.soupsAndSalads = false
    this.tacos = false
    this.enchiladas = false
    this.desserts = false
    this.beverages = false
  }

  appetizersToggle(){
    this.menu = false
    this.appetizers = true
    this.soupsAndSalads = false
    this.tacos = false
    this.enchiladas = false
    this.desserts = false
    this.beverages = false
  }

  soupsAndSaladsToggle(){
    this.menu = false
    this.appetizers = false
    this.soupsAndSalads = true
    this.tacos = false
    this.enchiladas = false
    this.desserts = false
    this.beverages = false
  }

  tacosToggle(){
    this.menu = false
    this.appetizers = false
    this.soupsAndSalads = false
    this.tacos = true
    this.enchiladas = false
    this.desserts = false
    this.beverages = false
  }

  enchiladasToggle(){
    this.menu = false
    this.appetizers = false
    this.soupsAndSalads = false
    this.tacos = false
    this.enchiladas = true
    this.desserts = false
    this.beverages = false
  }

  dessertsToggle(){
    this.menu = false
    this.appetizers = false
    this.soupsAndSalads = false
    this.tacos = false
    this.enchiladas = false
    this.desserts = true
    this.beverages = false
  }

  beveragesToggle(){
    this.menu = false
    this.appetizers = false
    this.soupsAndSalads = false
    this.tacos = false
    this.enchiladas = false
    this.desserts = false
    this.beverages = true
  }

}
