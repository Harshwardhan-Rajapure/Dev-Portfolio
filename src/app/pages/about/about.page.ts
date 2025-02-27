import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    NavbarComponent,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
  ]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
