import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AddClothesComponent } from './add-clothes/add-clothes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddClothesComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule ,SharedModule],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clothes-app-c2a83',
        appId: '1:336184678822:web:091bd70a43e1a40a925767',
        storageBucket: 'clothes-app-c2a83.firebasestorage.app',
        apiKey: 'AIzaSyDyIzaiRkqPPs9aK4_obT5ei982lcSeyhY',
        authDomain: 'clothes-app-c2a83.firebaseapp.com',
        messagingSenderId: '336184678822',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
