import { Component} from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  currentLanguage: string;

  aboutTitle: string | undefined;
  aboutText: string | undefined;
  addressTitle: string | undefined;
  hoursTitle: string | undefined;
  hoursM: string | undefined;
  hoursT: string | undefined;
  hoursW: string | undefined;
  hoursR: string | undefined;
  hoursF: string | undefined;
  hoursSat: string | undefined;
  hoursSun: string | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.aboutTitle = this.getTranslatedText('aboutTitle');
    this.aboutText = this.getTranslatedText('aboutText');
    this.addressTitle = this.getTranslatedText('addressTitle');
    this.hoursTitle = this.getTranslatedText('hoursTitle');
    this.hoursM = this.getTranslatedText('hoursM');
    this.hoursT = this.getTranslatedText('hoursT');
    this.hoursW = this.getTranslatedText('hoursW');
    this.hoursR = this.getTranslatedText('hoursR');
    this.hoursF = this.getTranslatedText('hoursF');
    this.hoursSat = this.getTranslatedText('hoursSat');
    this.hoursSun = this.getTranslatedText('hoursSun');

    this.languageService.languageChanged.subscribe(language => {
      this.aboutTitle = this.getTranslatedText('aboutTitle');
      this.aboutText = this.getTranslatedText('aboutText');
      this.addressTitle = this.getTranslatedText('addressTitle');
      this.hoursTitle = this.getTranslatedText('hoursTitle');
      this.hoursM = this.getTranslatedText('hoursM');
      this.hoursT = this.getTranslatedText('hoursT');
      this.hoursW = this.getTranslatedText('hoursW');
      this.hoursR = this.getTranslatedText('hoursR');
      this.hoursF = this.getTranslatedText('hoursF');
      this.hoursSat = this.getTranslatedText('hoursSat');
      this.hoursSun = this.getTranslatedText('hoursSun');
    });
  }

  private getTranslatedText(key: string): string {
    const translations: { [key: string]: { [lang: string]: string } } = {
      aboutTitle: {
        en: translation.Language.en.contactPage.aboutTitle,
        es: translation.Language.es.contactPage.aboutTitle
      },aboutText:{
        en: translation.Language.en.contactPage.aboutText,
        es: translation.Language.es.contactPage.aboutText
      },addressTitle:{
        en: translation.Language.en.contactPage.addressTitle,
        es: translation.Language.es.contactPage.addressTitle
      },hoursTitle: {
        en: translation.Language.en.contactPage.hoursTitle,
        es: translation.Language.es.contactPage.hoursTitle
      },hoursM:{
        en: translation.Language.en.contactPage.hoursM,
        es: translation.Language.es.contactPage.hoursM
      },hoursT:{
        en: translation.Language.en.contactPage.hoursT,
        es: translation.Language.es.contactPage.hoursT
      },hoursW:{
        en: translation.Language.en.contactPage.hoursW,
        es: translation.Language.es.contactPage.hoursW
      },hoursR:{
        en: translation.Language.en.contactPage.hoursR,
        es: translation.Language.es.contactPage.hoursR
      },hoursF:{
        en: translation.Language.en.contactPage.hoursF,
        es: translation.Language.es.contactPage.hoursF
      },hoursSat:{
        en: translation.Language.en.contactPage.hoursSat,
        es: translation.Language.es.contactPage.hoursSat
      },hoursSun:{
        en: translation.Language.en.contactPage.hoursSun,
        es: translation.Language.es.contactPage.hoursSun
      }
    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }

}
