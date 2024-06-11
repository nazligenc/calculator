import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  display = '0';
  result = '';
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
  }

  calculate() {
    try {
      this.result = eval(this.display.replace('×', '*').replace('÷', '/')).toString();
    } catch (e) {
      this.result = 'Error';
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

  clear() {
    this.display = '0';
    this.result = '';
  }

  toggleSign() {
    if (this.display === '0') {
      // Eğer ekranda 0 varsa ve daha önce başka bir tuşa basılmamışsa, sadece 0'ı göster
      this.display = '0';
    } else if (this.display.startsWith('-')) {
      // Eğer ekranda - ile başlayan bir değer varsa, - işaretini kaldır
      this.display = this.display.substring(1);
    } else {
      // Değilse, ekrandaki değerin önüne - işareti ekle
      this.display = '-' + this.display;
    }
  }
}
