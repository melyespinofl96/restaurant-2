import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage: string = 'en';

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
