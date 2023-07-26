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

  soupsAndSaladsName0: string | undefined;
  soupsAndSaladsInfo0: string | undefined;
  soupsAndSaladsName1: string | undefined;
  soupsAndSaladsInfo1: string | undefined;
  soupsAndSaladsName2: string | undefined;
  soupsAndSaladsInfo2: string | undefined;

  tacosName0: string | undefined;
  tacosInfo0: string | undefined;
  tacosName1: string | undefined;
  tacosInfo1: string | undefined;
  tacosName2: string | undefined;
  tacosInfo2: string | undefined;
  tacosName3: string | undefined;
  tacosInfo3: string | undefined;

  enchiladasName0: string | undefined;
  enchiladasInfo0: string | undefined;
  enchiladasName1: string | undefined;
  enchiladasInfo1: string | undefined;
  enchiladasName2: string | undefined;
  enchiladasInfo2: string | undefined;

  dessertsName0: string | undefined;
  dessertsInfo0: string | undefined;
  dessertsName1: string | undefined;
  dessertsInfo1: string | undefined;
  dessertsName2: string | undefined;
  dessertsInfo2: string | undefined;

  beveragesName0: string | undefined;
  beveragesInfo0: string | undefined;
  beveragesName1: string | undefined;
  beveragesInfo1: string | undefined;
  beveragesName2: string | undefined;
  beveragesInfo2: string | undefined;


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

    this.soupsAndSaladsName0 = this.getTranslatedText('soupsAndSaladsName0');
    this.soupsAndSaladsInfo0 = this.getTranslatedText('soupsAndSaladsInfo0');
    this.soupsAndSaladsName1 = this.getTranslatedText('soupsAndSaladsName1');
    this.soupsAndSaladsInfo1 = this.getTranslatedText('soupsAndSaladsInfo1');
    this.soupsAndSaladsName2 = this.getTranslatedText('soupsAndSaladsName2');
    this.soupsAndSaladsInfo2 = this.getTranslatedText('soupsAndSaladsInfo2');

    this.tacosName0 = this.getTranslatedText('tacosName0');
    this.tacosInfo0 = this.getTranslatedText('tacosInfo0');
    this.tacosName1 = this.getTranslatedText('tacosName1');
    this.tacosInfo1 = this.getTranslatedText('tacosInfo1');
    this.tacosName2 = this.getTranslatedText('tacosName2');
    this.tacosInfo2 = this.getTranslatedText('tacosInfo2');
    this.tacosName3 = this.getTranslatedText('tacosName3');
    this.tacosInfo3 = this.getTranslatedText('tacosInfo3');

    this.enchiladasName0 = this.getTranslatedText('enchiladasName0');
    this.enchiladasInfo0 = this.getTranslatedText('enchiladasInfo0');
    this.enchiladasName1 = this.getTranslatedText('enchiladasName1');
    this.enchiladasInfo1 = this.getTranslatedText('enchiladasInfo1');
    this.enchiladasName2 = this.getTranslatedText('enchiladasName2');
    this.enchiladasInfo2 = this.getTranslatedText('enchiladasInfo2');

    this.dessertsName0 = this.getTranslatedText('dessertsName0');
    this.dessertsInfo0 = this.getTranslatedText('dessertsInfo0');
    this.dessertsName1 = this.getTranslatedText('dessertsName0');
    this.dessertsInfo1 = this.getTranslatedText('dessertsInfo0');
    this.dessertsName2 = this.getTranslatedText('dessertsName0');
    this.dessertsInfo2 = this.getTranslatedText('dessertsInfo0');

    this.beveragesName0 = this.getTranslatedText('beveragesName0');
    this.beveragesInfo0 = this.getTranslatedText('beveragesInfo0');
    this.beveragesName1 = this.getTranslatedText('beveragesName1');
    this.beveragesInfo1 = this.getTranslatedText('beveragesInfo1');
    this.beveragesName2 = this.getTranslatedText('beveragesName2');
    this.beveragesInfo2 = this.getTranslatedText('beveragesInfo2');

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

      this.soupsAndSaladsName0 = this.getTranslatedText('soupsAndSaladsName0');
      this.soupsAndSaladsInfo0 = this.getTranslatedText('soupsAndSaladsInfo0');
      this.soupsAndSaladsName1 = this.getTranslatedText('soupsAndSaladsName1');
      this.soupsAndSaladsInfo1 = this.getTranslatedText('soupsAndSaladsInfo1');
      this.soupsAndSaladsName2 = this.getTranslatedText('soupsAndSaladsName2');
      this.soupsAndSaladsInfo2 = this.getTranslatedText('soupsAndSaladsInfo2');

      this.tacosName0 = this.getTranslatedText('tacosName0');
      this.tacosInfo0 = this.getTranslatedText('tacosInfo0');
      this.tacosName1 = this.getTranslatedText('tacosName1');
      this.tacosInfo1 = this.getTranslatedText('tacosInfo1');
      this.tacosName2 = this.getTranslatedText('tacosName2');
      this.tacosInfo2 = this.getTranslatedText('tacosInfo2');
      this.tacosName3 = this.getTranslatedText('tacosName3');
      this.tacosInfo3 = this.getTranslatedText('tacosInfo3');

      this.enchiladasName0 = this.getTranslatedText('enchiladasName0');
      this.enchiladasInfo0 = this.getTranslatedText('enchiladasInfo0');
      this.enchiladasName1 = this.getTranslatedText('enchiladasName1');
      this.enchiladasInfo1 = this.getTranslatedText('enchiladasInfo1');
      this.enchiladasName2 = this.getTranslatedText('enchiladasName2');
      this.enchiladasInfo2 = this.getTranslatedText('enchiladasInfo2');

      this.dessertsName0 = this.getTranslatedText('dessertsName0');
      this.dessertsInfo0 = this.getTranslatedText('dessertsInfo0');
      this.dessertsName1 = this.getTranslatedText('dessertsName1');
      this.dessertsInfo1 = this.getTranslatedText('dessertsInfo1');
      this.dessertsName2 = this.getTranslatedText('dessertsName2');
      this.dessertsInfo2 = this.getTranslatedText('dessertsInfo2');

      this.beveragesName0 = this.getTranslatedText('beveragesName0');
      this.beveragesInfo0 = this.getTranslatedText('beveragesInfo0');
      this.beveragesName1 = this.getTranslatedText('beveragesName1');
      this.beveragesInfo1 = this.getTranslatedText('beveragesInfo1');
      this.beveragesName2 = this.getTranslatedText('beveragesName2');
      this.beveragesInfo2 = this.getTranslatedText('beveragesInfo2');
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

      //Soups and Salads
      soupsAndSaladsName0: {
        en: translation.Language.en.menu.soupsAndSalads[0].Name,
        es: translation.Language.es.menu.soupsAndSalads[0].Name
      },soupsAndSaladsInfo0: {
        en: translation.Language.en.menu.soupsAndSalads[0].description,
        es: translation.Language.es.menu.soupsAndSalads[0].description
      },soupsAndSaladsName1: {
        en: translation.Language.en.menu.soupsAndSalads[1].Name,
        es: translation.Language.es.menu.soupsAndSalads[1].Name
      },soupsAndSaladsInfo1: {
        en: translation.Language.en.menu.soupsAndSalads[1].description,
        es: translation.Language.es.menu.soupsAndSalads[1].description
      },soupsAndSaladsName2: {
        en: translation.Language.en.menu.soupsAndSalads[2].Name,
        es: translation.Language.es.menu.soupsAndSalads[2].Name
      },soupsAndSaladsInfo2: {
        en: translation.Language.en.menu.soupsAndSalads[2].description,
        es: translation.Language.es.menu.soupsAndSalads[2].description
      },

      //Tacos
      tacosName0: {
        en: translation.Language.en.menu.tacos[0].Name,
        es: translation.Language.es.menu.tacos[0].Name
      },tacosInfo0: {
        en: translation.Language.en.menu.tacos[0].description,
        es: translation.Language.es.menu.tacos[0].description
      },tacosName1: {
        en: translation.Language.en.menu.tacos[1].Name,
        es: translation.Language.es.menu.tacos[1].Name
      },tacosInfo1: {
        en: translation.Language.en.menu.tacos[1].description,
        es: translation.Language.es.menu.tacos[1].description
      },tacosName2: {
        en: translation.Language.en.menu.tacos[2].Name,
        es: translation.Language.es.menu.tacos[2].Name
      },tacosInfo2: {
        en: translation.Language.en.menu.tacos[2].description,
        es: translation.Language.es.menu.tacos[2].description
      },tacosName3: {
        en: translation.Language.en.menu.tacos[3].Name,
        es: translation.Language.es.menu.tacos[3].Name
      },tacosInfo3: {
        en: translation.Language.en.menu.tacos[3].description,
        es: translation.Language.es.menu.tacos[3].description
      },

      //Enchiladas
      enchiladasName0: {
        en: translation.Language.en.menu.enchiladas[0].Name,
        es: translation.Language.es.menu.enchiladas[0].Name,
      },enchiladasInfo0: {
        en: translation.Language.en.menu.enchiladas[0].description,
        es: translation.Language.es.menu.enchiladas[0].description,
      },enchiladasName1: {
        en: translation.Language.en.menu.enchiladas[1].Name,
        es: translation.Language.es.menu.enchiladas[1].Name,
      },enchiladasInfo1: {
        en: translation.Language.en.menu.enchiladas[1].description,
        es: translation.Language.es.menu.enchiladas[1].description,
      },enchiladasName2: {
        en: translation.Language.en.menu.enchiladas[2].Name,
        es: translation.Language.es.menu.enchiladas[2].Name,
      },enchiladasInfo2: {
        en: translation.Language.en.menu.enchiladas[2].description,
        es: translation.Language.es.menu.enchiladas[2].description,
      },

      //Postres
      dessertsName0: {
        en: translation.Language.en.menu.desserts[0].Name,
        es: translation.Language.es.menu.desserts[0].Name,
      },dessertsInfo0: {
        en: translation.Language.en.menu.desserts[0].description,
        es: translation.Language.es.menu.desserts[0].description,
      },dessertsName1: {
        en: translation.Language.en.menu.desserts[1].Name,
        es: translation.Language.es.menu.desserts[1].Name,
      },dessertsInfo1: {
        en: translation.Language.en.menu.desserts[1].description,
        es: translation.Language.es.menu.desserts[1].description,
      },dessertsName2: {
        en: translation.Language.en.menu.desserts[2].Name,
        es: translation.Language.es.menu.desserts[2].Name,
      },dessertsInfo2: {
        en: translation.Language.en.menu.desserts[2].description,
        es: translation.Language.es.menu.desserts[2].description,
      },

      //Beverages
      beveragesName0: {
        en: translation.Language.en.menu.beverages[0].Name,
        es: translation.Language.es.menu.beverages[0].Name,
      },beveragesInfo0: {
        en: translation.Language.en.menu.beverages[0].description,
        es: translation.Language.es.menu.beverages[0].description,
      },beveragesName1: {
        en: translation.Language.en.menu.beverages[1].Name,
        es: translation.Language.es.menu.beverages[1].Name,
      },beveragesInfo1: {
        en: translation.Language.en.menu.beverages[1].description,
        es: translation.Language.es.menu.beverages[1].description,
      },beveragesName2: {
        en: translation.Language.en.menu.beverages[2].Name,
        es: translation.Language.es.menu.beverages[2].Name,
      },beveragesInfo2: {
        en: translation.Language.en.menu.beverages[2].description,
        es: translation.Language.es.menu.beverages[2].description,
      },
    };

    const currentLanguage = this.languageService.getCurrentLanguage();
    return translations[key][currentLanguage] || '';
  }

}
