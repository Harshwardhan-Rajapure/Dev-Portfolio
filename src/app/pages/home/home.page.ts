import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  IonContent,
  IonCard,
  IonRow,
  IonIcon,
  IonFooter,
  IonCol,
  IonGrid,
  IonButton,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonLabel,
  IonChip,
  IonItem,
  IonImg,
  IonProgressBar,
  IonText
} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import {
  logoFacebook,
  logoWhatsapp,
  logoLinkedin,
  logoGithub,
  logoInstagram,
  openOutline, documentTextOutline, pin, close, link } from 'ionicons/icons'
import { NavbarComponent } from 'src/app/components/navbar/navbar.component'
import { Project, Projects, Skill, Skills } from './enums/projectsInfo.enum'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    IonContent,
    IonCard,
    IonRow,
    IonIcon,
    IonFooter,
    IonCol,
    IonGrid,
    IonButton,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonLabel,
    IonChip,
    IonItem,
    IonImg,
    IonProgressBar,
    IonText
  ],
})
export class HomePage {

  isModalOpen = false
  projects : Project[] = Projects
  skills: Skill[] = Skills;
  selectedProject: Project | null = null 
  
  constructor() {
    addIcons({logoFacebook,logoWhatsapp,logoLinkedin,logoGithub,logoInstagram,openOutline,documentTextOutline,link,pin,close,});
  }
  
  project () {
    console.log('projects',this.projects)
  }

  setOpen(isOpen: boolean, project?: Project) {
    this.isModalOpen = isOpen
    if (isOpen && project) {
      this.selectedProject = project
    } else {
      this.selectedProject = null 
    }
    console.log('Modal state:', this.isModalOpen, 'Selected Project:', this.selectedProject)
  }

  // Calculate the stroke-dasharray for the circular progress
  getDashArray(proficiency: number): string {
    const circumference = 2 * Math.PI * 54; // r=54 from SVG circle
    const progress = (proficiency / 100) * circumference;
    return `${progress} ${circumference - progress}`;
  }

  // Optional: Dynamic gradient for inner circle
  getGradient(proficiency: number): string {
    return `conic-gradient(#3498db ${proficiency}%, #e0e0e0 ${proficiency}%)`;
  }

}
