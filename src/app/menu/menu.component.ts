import { Component } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import translation from '../_files/translation.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  menu = true
  appetizers = false
  soupsAndSalads = false
  tacos = false
  enchiladas = false
  desserts = false
  beverages = false

  //Translations
  currentLanguage: string;

  categories0: string | undefined;
  categories1: string | undefined;
  categories2: string | undefined;
  categories3: string | undefined;
  categories4: string | undefined;
  categories5: string | undefined;
  categories6: string | undefined;

  appetizersName0: string | undefined;
  appetizersInfo0: string | undefined;
  appetizersName1: string | undefined;
  appetizersInfo1: string | undefined;
  appetizersName2: string | undefined;
  appetizersInfo2: string | undefined;
  appetizersName3: string | undefined;
  appetizersInfo3: string | undefined;
  appetizersName4: string | undefined;
  appetizersInfo4: string | undefined;
  appetizersName5: string | undefined;
  appetizersInfo5: string | undefined;
  appetizersName6: string | undefined;
  appetizersInfo6: string | undefined;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.menuToggle();

    this.categories0 = this.getTranslatedText('categories0');
    this.categories1 = this.getTranslatedText('categories1');
    this.categories2 = this.getTranslatedText('categories2');
    this.categories3 = this.getTranslatedText('categories3');
    this.categories4 = this.getTranslatedText('categories4');
    this.categories5 = this.getTranslatedText('categories5');

    this.appetizersName0 = this.getTranslatedText('appetizersName0');
    this.appetizersInfo0 = this.getTranslatedText('appetizersInfo0');
    this.appetizersName1 = this.getTranslatedText('appetizersName1');
    this.appetizersInfo1 = this.getTranslatedText('appetizersInfo1');
    this.appetizersName2 = this.getTranslatedText('appetizersName2');
    this.appetizersInfo2 = this.getTranslatedText('appetizersInfo2');
    this.appetizersName3 = this.getTranslatedText('appetizersName3');
    this.appetizersInfo3 = this.getTranslatedText('appetizersInfo3');

    this.languageService.languageChanged.subscribe(language => {
      this.categories0 = this.getTranslatedText('categories0');
      this.categories1 = this.getTranslatedText('categories1');
      this.categories2 = this.getTranslatedText('categories2');
      this.categories3 = this.getTranslatedText('categories3');
      this.categories4 = this.getTranslatedText('categories4');
      this.categories5 = this.getTranslatedText('categories5');

      this.appetizersName0 = this.getTranslatedText('appetizersName0');
      this.appetizersInfo0 = this.getTranslatedText('appetizersInfo0');
      this.appetizersName1 = this.getTranslatedText('appetizersName1');
      this.appetizersInfo1 = this.getTranslatedText('appetizersInfo1');
      this.appetizersName2 = this.getTranslatedText('appetizersName2');
      this.appetizersInfo2 = this.getTranslatedText('appetizersInfo2');
      this.appetizersName3 = this.getTranslatedText('appetizersName3');
      this.appetizersInfo3 = this.getTranslatedText('appetizersInfo3');

    });
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

  private getTranslatedText(key: string): string {
    const translations: { [key: string]: { [lang: string]: string } } = {
      categories0: {
        en: translation.Language.en.menu.categories[0],
        es: translation.Language.es.menu.categories[0]
      },categories1: {
        en: translation.Language.en.menu.categories[1],
        es: translation.Language.es.menu.categories[1]
      },categories2: {
        en: translation.Language.en.menu.categories[2],
        es: translation.Language.es.menu.categories[2]
      },categories3: {
        en: translation.Language.en.menu.categories[3],
        es: translation.Language.es.menu.categories[3]
      },categories4: {
        en: translation.Language.en.menu.categories[4],
        es: translation.Language.es.menu.categories[4]
      },categories5: {
        en: translation.Language.en.menu.categories[5],
        es: translation.Language.es.menu.categories[5]
      },

      //Appetizers
      appetizersName0: {
        en: translation.Language.en.menu.appetizers[0].Name,
        es: translation.Language.es.menu.appetizers[0].Name
      },appetizersInfo0: {
        en: translation.Language.en.menu.appetizers[0].description,
        es: translation.Language.es.menu.appetizers[0].description
      },appetizersName1: {
        en: translation.Language.en.menu.appetizers[1].Name,
        es: translation.Language.es.menu.appetizers[1].Name
      },appetizersInfo1: {
        en: translation.Language.en.menu.appetizers[1].description,
        es: translation.Language.es.menu.appetizers[1].description
      },appetizersName2: {
        en: translation.Language.en.menu.appetizers[2].Name,
        es: translation.Language.es.menu.appetizers[2].Name
      },appetizersInfo2: {
        en: translation.Language.en.menu.appetizers[2].description,
        es: translation.Language.es.menu.appetizers[2].description
      },appetizersName3: {
        en: translation.Language.en.menu.appetizers[3].Name,
        es: translation.Language.es.menu.appetizers[3].Name
      },appetizersInfo3: {
        en: translation.Language.en.menu.appetizers[3].description,
        es: translation.Language.es.menu.appetizers[3].description
      },
    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }

}
