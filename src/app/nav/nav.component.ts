import { Component} from '@angular/core';
import { LanguageService } from '../_services/language.service';
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

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  mobileMenuToggle(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  switchLanguage(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(this.currentLanguage);
    
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
}