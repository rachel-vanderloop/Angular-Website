import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
}

window.onscroll = function() {makeTransparent()};

function makeTransparent() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    var element = document.getElementById("transparent-nav")!;
    var buttonHome = document.getElementById("button-home")!;
    var buttonResume = document.getElementById("button-resume")!;

    element.classList.replace("bg-transparent", "bg-info");
    buttonHome.classList.replace("btn-outline-dark", "btn-dark");
    buttonResume.classList.replace("btn-outline-dark", "btn-dark");

  } else {
    var element = document.getElementById("transparent-nav")!;
    var buttonHome = document.getElementById("button-home")!;
    var buttonResume = document.getElementById("button-resume")!;
    element.classList.replace("bg-info", "bg-transparent");
    buttonHome.classList.replace("btn-dark", "btn-outline-dark");
    buttonResume.classList.replace("btn-dark", "btn-outline-dark");
  }
}