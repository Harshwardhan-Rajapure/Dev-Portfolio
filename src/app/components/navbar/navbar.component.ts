import { Component, OnInit } from '@angular/core';
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
    IonList,
    IonContent,
    IonMenu,
    IonMenuButton,
  ],
})
export class NavbarComponent {

  constructor(private menuCtrl: MenuController) {}

  toggleMenu() {
    this.menuCtrl.toggle('main-menu');
  }

  closeMenu() {
    this.menuCtrl.close('main-menu');
  }
}
