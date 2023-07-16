import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  currentLanguage: string;

  contactUs: string | undefined;
  letsConnect: string | undefined;
  legal: string | undefined;
  instructions: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  privacyPolicy: string | undefined;
  accessibility: string | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.contactUs = this.getTranslatedText('contactUs');
    this.letsConnect = this.getTranslatedText('letsConnect');
    this.legal = this.getTranslatedText('legal');
    this.instructions = this.getTranslatedText('instructions');
    this.phone = this.getTranslatedText('phone');
    this.email = this.getTranslatedText('email');
    this.privacyPolicy = this.getTranslatedText('privacyPolicy');
    this.accessibility = this.getTranslatedText('accessibility');

    this.languageService.languageChanged.subscribe(language => {
      this.contactUs = this.getTranslatedText('contactUs');
      this.letsConnect = this.getTranslatedText('letsConnect');
      this.legal = this.getTranslatedText('legal');
      this.instructions = this.getTranslatedText('instructions');
      this.phone = this.getTranslatedText('phone');
      this.email = this.getTranslatedText('email');
      this.privacyPolicy = this.getTranslatedText('privacyPolicy');
      this.accessibility = this.getTranslatedText('accessibility');
    });
  }

  private getTranslatedText(key: string): string {
    const translations: { [key: string]: { [lang: string]: string } } = {
      contactUs: {
        en: translation.Language.en.footerBar.contactUsTitle,
        es: translation.Language.es.footerBar.contactUsTitle
      },letsConnect:{
        en: translation.Language.en.footerBar.LetConnectTitle,
        es: translation.Language.es.footerBar.LetConnectTitle
      },legal:{
        en: translation.Language.en.footerBar.legalTitle,
        es: translation.Language.es.footerBar.legalTitle
      },instructions:{
        en: translation.Language.en.footerBar.contactInstructions,
        es: translation.Language.es.footerBar.contactInstructions
      },phone:{
        en: translation.Language.en.footerBar.contactNumber,
        es: translation.Language.es.footerBar.contactNumber
      },email:{
        en: translation.Language.en.footerBar.ContactEmail,
        es: translation.Language.es.footerBar.ContactEmail
      },privacyPolicy:{
        en: translation.Language.en.footerBar.privacyPolicy,
        es: translation.Language.es.footerBar.privacyPolicy
      },accessibility:{
        en: translation.Language.en.footerBar.accessibility,
        es: translation.Language.es.footerBar.accessibility
      }
    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }
}
