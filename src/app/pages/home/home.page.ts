import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
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
  openOutline, documentTextOutline, pin, close, link, cloudUploadOutline, callOutline, mailOutline, helpCircleOutline, repeatOutline, locationOutline, cloudDownloadOutline, chatbubbleOutline, add, colorPalette, globe } from 'ionicons/icons'
import { NavbarComponent } from 'src/app/components/navbar/navbar.component'
import { Project, Projects, Skill, Skills } from './enums/projectsInfo.enum'
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {

  isModalOpen = false
  projects : Project[] = Projects
  skills: Skill[] = Skills;
  selectedProject: Project | null = null 
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    addIcons({logoFacebook,logoWhatsapp,logoLinkedin,logoGithub,logoInstagram,openOutline,cloudDownloadOutline,documentTextOutline,link,cloudUploadOutline,locationOutline,repeatOutline,callOutline,mailOutline,chatbubbleOutline,add,colorPalette,globe,helpCircleOutline,pin,close,});
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      emailOrMobile: ['', Validators.required],
      description: ['', Validators.required],
      file: [null],
      nda: [false],
    });
  }

  setOpen(isOpen: boolean, project?: Project) {
    this.isModalOpen = isOpen
    if (isOpen && project) {
      this.selectedProject = project
    } else {
      this.selectedProject = null 
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.contactForm.patchValue({ file });
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Form Submitted')
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
      alert('OOPS! Something went wrong...')
    }
  }

  scrollToContact() {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
