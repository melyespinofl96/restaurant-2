import { Component } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentLanguage: string;

  specialsTitle: string | undefined;
  specialsInfo: string | undefined;
  specialEnds: string | undefined;
  specialItems0: string | undefined;
  specialItems1: string | undefined;
  specialItems2: string | undefined;
  specialItemsInfo0: string | undefined;
  specialItemsInfo1: string | undefined;
  specialItemsInfo2: string | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.specialsTitle = this.getTranslatedText('specialsTitle');
    this.specialsInfo = this.getTranslatedText('specialsInfo');
    this.specialEnds = this.getTranslatedText('specialEnds');
    this.specialItems0 = this.getTranslatedText('specialItems0');
    this.specialItems1 = this.getTranslatedText('specialItems1');
    this.specialItems2 = this.getTranslatedText('specialItems2');
    this.specialItemsInfo0 = this.getTranslatedText('specialItemsInfo0');
    this.specialItemsInfo1 = this.getTranslatedText('specialItemsInfo1');
    this.specialItemsInfo2 = this.getTranslatedText('specialItemsInfo2');

    this.languageService.languageChanged.subscribe(language => {
      this.specialsTitle = this.getTranslatedText('specialsTitle');
      this.specialsInfo = this.getTranslatedText('specialsInfo');
      this.specialEnds = this.getTranslatedText('specialEnds');
      this.specialItems0 = this.getTranslatedText('specialItems0');
      this.specialItems1 = this.getTranslatedText('specialItems1');
      this.specialItems2 = this.getTranslatedText('specialItems2');
      this.specialItemsInfo0 = this.getTranslatedText('specialItemsInfo0');
      this.specialItemsInfo1 = this.getTranslatedText('specialItemsInfo1');
      this.specialItemsInfo2 = this.getTranslatedText('specialItemsInfo2');
    });
  }

  private getTranslatedText(key: string): string {
    const translations: { [key: string]: { [lang: string]: string } } = {
      specialsTitle: {
        en: translation.Language.en.homePage[0].specialsTitle,
        es: translation.Language.es.homePage[0].specialsTitle
      },specialsInfo: {
        en: translation.Language.en.homePage[0].specialsInfo,
        es: translation.Language.es.homePage[0].specialsInfo
      },specialEnds: {
        en: translation.Language.en.homePage[0].specialEnds,
        es: translation.Language.es.homePage[0].specialEnds
      },specialItems0: {
        en: translation.Language.en.homePage[0].specialItems[0],
        es: translation.Language.es.homePage[0].specialItems[0]
      },specialItems1: {
        en: translation.Language.en.homePage[0].specialItems[1],
        es: translation.Language.es.homePage[0].specialItems[1]
      },specialItems2: {
        en: translation.Language.en.homePage[0].specialItems[2],
        es: translation.Language.es.homePage[0].specialItems[2]
      },specialItemsInfo0: {
        en: translation.Language.en.homePage[0].specialItemsInfo[0],
        es: translation.Language.es.homePage[0].specialItemsInfo[0]
      },specialItemsInfo1: {
        en: translation.Language.en.homePage[0].specialItemsInfo[1],
        es: translation.Language.es.homePage[0].specialItemsInfo[1]
      },specialItemsInfo2: {
        en: translation.Language.en.homePage[0].specialItemsInfo[2],
        es: translation.Language.es.homePage[0].specialItemsInfo[2]
      },

    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }

}
