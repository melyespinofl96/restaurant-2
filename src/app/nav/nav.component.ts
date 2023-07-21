import { Component } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  mobileMenu = false;

  currentLanguage: string;
  languageDropdownOpen = false;

  home: string | undefined;
  menu: string | undefined;
  contact: string | undefined;

  language: string | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.home = this.getTranslatedText('home');
    this.menu = this.getTranslatedText('menu');
    this.contact = this.getTranslatedText('contact');

    this.languageButton(this.languageService.getCurrentLanguage())

    this.languageService.languageChanged.subscribe(language => {
      this.home = this.getTranslatedText('home');
      this.menu = this.getTranslatedText('menu');
      this.contact = this.getTranslatedText('contact');
    });
  }

  mobileMenuToggle(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.currentLanguage = this.languageService.getCurrentLanguage()
    this.languageButton(language);
    
    this.toggleLanguageDropdown();
  }

  private getTranslatedText(key: string): string {
    const translations: { [key: string]: { [lang: string]: string } } = {
      home: {
        en: translation.Language.en.navBar.home,
        es: translation.Language.es.navBar.home
      },menu:{
        en: translation.Language.en.navBar.menu,
        es: translation.Language.es.navBar.menu
      },contact:{
        en: translation.Language.en.navBar.contact,
        es: translation.Language.es.navBar.contact
      }
    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }

  languageButton(id: string){
    if(id == 'en')
      this.language = "Language"
    else
      this.language = "Idioma"
  }
}