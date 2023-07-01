import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{

  mobileMenu:boolean = false

  ngOnInit(): void {
    this.mobileMenu = false
  }

  mobileMenuToggle(){
    if (this.mobileMenu == false)
      this.mobileMenu = true
    else
      this.mobileMenu = false
  }
}