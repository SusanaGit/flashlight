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
  ActionSheetController, IonLabel, IonList, IonItem, IonAlert
} from '@ionic/angular/standalone';
import {CapacitorFlash} from "@capgo/capacitor-flash";
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText, IonToggle, IonButton, IonLabel, IonList, IonItem, IonAlert],
})

export class HomePage {

  public active: boolean;

  constructor(private actionSheetCtrl: ActionSheetController, public userService: UserService) {

    this.active = false;

  }

  // PLUG0: CAPACITOR-FLASH
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

  // PLUG1: ACTION SHEET CONTROLLER
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

  // PLUG2: ALERT INPUT
  public alertButtons = [{}];
  public alertInputs = [{}];

  initializeAlertInput() {
    this.alertButtons = [
      {
        type: 'button',
        text: 'your selfie',
        handler: () => {
          this.userService.addNewUser();
        }
      },
      {
        text: 'OK:)'
      },
];
    this.alertInputs = [
      {
        placeholder: 'Name',
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself',
      },
    ];
  }
}
