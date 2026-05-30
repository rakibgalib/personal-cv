import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  currentUrl: string = '';

  constructor(public router: Router, private renderer: Renderer2) {
    // Track current URL
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
      this.closeMenu();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMenuState();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateMenuState();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeMenu();
  }

  private updateMenuState() {
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    const overlay = document.querySelector('.overlay');
    const toggler = document.querySelector('.navbar-toggler');

    if (this.isMenuOpen) {
      // Show menu
      this.renderer.addClass(navbarCollapse, 'show');
      this.renderer.addClass(overlay, 'active');
      this.renderer.addClass(toggler, 'active');
    } else {
      // Hide menu
      this.renderer.removeClass(navbarCollapse, 'show');
      this.renderer.removeClass(overlay, 'active');
      this.renderer.removeClass(toggler, 'active');
    }
  }
}
