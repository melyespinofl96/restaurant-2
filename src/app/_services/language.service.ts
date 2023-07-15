import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import test from '../_files/test.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {}

  private currentLanguage: string = 'en';

  

  getCurrentLanguage(): string {
    console.log(this.currentLanguage);
    return this.currentLanguage;
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getDataFromJsonFile(): void {
    console.log(test.Language[1].menuPage[0].specialsTitle);
  }
}
