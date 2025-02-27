import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    NavbarComponent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonHeader,
  ],
})
export class HomePage {
  constructor() {}
}
