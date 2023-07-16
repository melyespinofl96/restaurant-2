import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en';
  languageChanged: EventEmitter<string> = new EventEmitter<string>();

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
    this.languageChanged.emit(language); // Emit the language change event
  }
}