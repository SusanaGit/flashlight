import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText],
})
export class HomePage {

  public active: boolean;

  constructor() {
    this.active = false;
  }
}
