import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainCollaboratorsComponent } from './components/main-collaborators/main-collaborators.component';


@NgModule({
  declarations: [
    MainpageComponent,
    MainHeaderComponent,
    MainCollaboratorsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
