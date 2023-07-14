import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../_services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{

  mobileMenu:boolean = false

  currentLanguage: string;
  languageDropdownOpen = false;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.mobileMenu = false
  }

  mobileMenuToggle(){
    if (this.mobileMenu == false)
      this.mobileMenu = true
    else
      this.mobileMenu = false
  }

  /*Language*/
  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.toggleLanguageDropdown()
  }
}