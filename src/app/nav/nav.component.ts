import { Component} from '@angular/core';
import { LanguageService } from '../_services/language.service';
import { HttpClient } from '@angular/common/http';
import test from '../_files/test.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  mobileMenu = false;
  currentLanguage: string;
  languageDropdownOpen = false;

  home: string = test.Language[0].navBar[0].home
  menu: string = test.Language[0].navBar[0].menu
  contact: string = test.Language[0].navBar[0].contact

  constructor(private languageService: LanguageService, private http: HttpClient) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  mobileMenuToggle(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.toggleLanguage(this.currentLanguage);
    this.toggleLanguageDropdown();
  }

  toggleLanguage(language: string){
    if(language == 'en'){
      this.home = test.Language[0].navBar[0].home
      this.menu = test.Language[0].navBar[0].menu
      this.contact = test.Language[0].navBar[0].contact
    }else if(language == 'es'){
      this.home = test.Language[1].navBar[0].home
      this.menu = test.Language[1].navBar[0].menu
      this.contact = test.Language[1].navBar[0].contact
    }
  }

  /*
  getDataFromJsonFile1(): void {
    console.log(test.Language[0].navBar[0].home);
  }
  */
}