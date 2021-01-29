import { Component, OnInit } from '@angular/core';
//import { info } from 'console';

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
    element.classList.replace("bg-transparent", "bg-info");
  } else {
    var element = document.getElementById("transparent-nav")!;
    element.classList.replace("bg-info", "bg-transparent");
  }
}
