import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, MenuController, IonList, IonMenu, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    RouterModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonHeader,
    IonContent,
    IonMenu,
    IonMenuButton,
  ],
  standalone: true
})
export class NavbarComponent implements OnInit {
  @ViewChild('hamburgerIcon') hamburgerIcon!: ElementRef;
  isMenuOpen = false;
  activeSection = 'homeSection';

  constructor(
    private menuCtrl: MenuController,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.checkActiveSection();
    window.addEventListener('scroll', this.checkActiveSection.bind(this));
  }

  checkActiveSection() {
    const sections = ['homeSection', 'projectSection', 'skillsSection', 'contactSection'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.hamburgerIcon) {
      if (this.isMenuOpen) {
        this.renderer.addClass(this.hamburgerIcon.nativeElement, 'open');
      } else {
        this.renderer.removeClass(this.hamburgerIcon.nativeElement, 'open');
      }
    }
    
    this.menuCtrl.toggle('main-menu');
  }

  closeMenu() {
    this.isMenuOpen = false;
    
    if (this.hamburgerIcon) {
      this.renderer.removeClass(this.hamburgerIcon.nativeElement, 'open');
    }
    
    this.menuCtrl.close('main-menu');
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}