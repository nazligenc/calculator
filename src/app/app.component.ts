import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
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
    if (this.display === '0' && operator !== '+/-' && operator !== '×' && operator !== '÷') {
      return; // Eğer ekran değeri 0 ise ve eklenen operatör değiştirme işlemi değilse, işlem yapma
    }

    const lastChar = this.display[this.display.length - 1];
    if (['+', '-', '×', '÷'].includes(lastChar) && ['+', '-', '×', '÷'].includes(operator)) {
      this.display = this.display.slice(0, -1) + operator;
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
      this.display = '0';
    } else if (this.display.startsWith('-')) {
      this.display = this.display.substring(1);
    } else {
      this.display = '-' + this.display;
    }
  }
  appendZeroes(num:number) {
    if (this.display !== '0') {
      this.display += '00';
    }else{
      return;
    }
  }
}
