import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';

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
    IonButtons,
    IonButton,

  ],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
