import { Component } from '@angular/core';
import { LanguageService } from '../_services/language.service';
import test from '../_files/test.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentLanguage: string;

  contactUs: string = test.Language[0].footerBar[0].contactUsTitle
  letsConnect: string = test.Language[0].footerBar[0].LetConnectTitle
  legal: string = test.Language[0].footerBar[0].legalTitle
  instructions: string = test.Language[0].footerBar[0].contactInstructions
  phone: string = test.Language[0].footerBar[0].contactNumber
  email: string = test.Language[0].footerBar[0].ContactEmail
  privacyPolicy: string = test.Language[0].footerBar[0].privacyPolicy
  accessibility: string = test.Language[0].footerBar[0].accessibility

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  toggleLanguage(language: string){
    if(language == 'en'){
      this.contactUs = test.Language[0].footerBar[0].contactUsTitle
      this.letsConnect = test.Language[0].footerBar[0].LetConnectTitle
      this.legal = test.Language[0].footerBar[0].legalTitle
      this.instructions = test.Language[0].footerBar[0].contactInstructions
      this.phone = test.Language[0].footerBar[0].contactNumber
      this.email = test.Language[0].footerBar[0].ContactEmail
      this.privacyPolicy = test.Language[0].footerBar[0].privacyPolicy
      this.accessibility = test.Language[0].footerBar[0].accessibility
    }else if(language == 'es'){
      this.contactUs = test.Language[1].footerBar[0].contactUsTitle
      this.letsConnect = test.Language[1].footerBar[0].LetConnectTitle
      this.legal = test.Language[1].footerBar[0].legalTitle
      this.instructions = test.Language[1].footerBar[0].contactInstructions
      this.phone = test.Language[1].footerBar[0].contactNumber
      this.email = test.Language[1].footerBar[0].ContactEmail
      this.privacyPolicy = test.Language[1].footerBar[0].privacyPolicy
      this.accessibility = test.Language[1].footerBar[0].accessibility
    }
  }
}
