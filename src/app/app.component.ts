import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  display = '0';
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
  }




  calculate() {
    try {
      this.display = eval(this.display.replace('×', '*').replace('÷', '/')).toString();
    } catch (e) {
      this.display = 'Error';
    }
  }
  appendNumber(num: number) {
    if (this.display === '0') {
      this.display = String(num);
    } else {
      this.display += String(num);
    }
  }
  appendOperator(operator: string) {
    if (operator === '+/-') {
      this.display = this.display.startsWith('-') ? this.display.substring(1) : '-' + this.display;
    } else {
      this.display += operator;
    }
  }
  clear(){

  }



  }



