import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';
import { logIn, logOutOutline, logOut,logInSharp, library, playCircle, radio, search, camera, qrCode, qrCodeOutline, qrCodeSharp, image, imageOutline, imageSharp, personCircle, cameraOutline, cameraReverseSharp, cameraReverse, cameraReverseOutline } from 'ionicons/icons';
import { IonApp, IonCardContent, IonTabs, IonCardHeader, IonCardTitle, IonContent, IonTitle, IonToolbar, IonHeader, IonTab, IonTabBar, IonTabButton, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonIcon, IonCardSubtitle, IonCard, IonFabButton, IonFab, IonLabel, IonList, IonItem, IonImg, IonButton, IonActionSheet, IonModal } from "@ionic/angular/standalone";


const ION_COMPONENT = [
  IonApp, IonFab, IonFabButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonTabButton, IonTabBar, IonTab, IonHeader, IonToolbar, IonTitle, IonContent, IonTabs,
  IonButtons, IonBackButton, IonSegment, IonSegmentButton,
  IonLabel, IonList, IonItem, IonButton, IonImg,
  IonActionSheet, IonModal
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ION_COMPONENT,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ION_COMPONENT,
  ]
})
export class SharedModule {
  constructor() {
    addIcons({ personCircle, logIn, logOutOutline, logOut,logInSharp, library, playCircle, radio, search, camera, qrCode, qrCodeOutline, qrCodeSharp, image, imageOutline, imageSharp,
      cameraOutline, cameraReverseSharp, cameraReverse, cameraReverseOutline
     });
  }
}
