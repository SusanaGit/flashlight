import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonToggle
} from '@ionic/angular/standalone';
import {CapacitorFlash} from "@capgo/capacitor-flash";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText, IonToggle],
})
export class HomePage {

  public active: boolean;

  constructor() {
    this.active = false;
  }

  flash(){
    this.active = !this.active;

    if (this.active) {
      CapacitorFlash.switchOn({intensity: 100}).then(r =>{
        console.log("Flashlight ON");
      }).catch(error => {
        console.error("Error switching on flashlight", error);
      });
    } else {
      CapacitorFlash.switchOff().then(r => {
        console.log("Flashlight OFF");
      }).catch(error => {
        console.log("Error switching off flashlight", error);
      });
    }
  }
}
