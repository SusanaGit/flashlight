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
  IonToggle, IonButton,
  ActionSheetController, IonLabel, IonList, IonItem
} from '@ionic/angular/standalone';
import {CapacitorFlash} from "@capgo/capacitor-flash";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText, IonToggle, IonButton, IonLabel, IonList, IonItem],
})

export class HomePage {

  public active: boolean;
  private actionSheetController: any;

  constructor(private actionSheetCtrl: ActionSheetController) {
    this.active = false;
  }

  // CAPACITOR-FLASH
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

  // ACTION SHEET CONTROLLER
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
