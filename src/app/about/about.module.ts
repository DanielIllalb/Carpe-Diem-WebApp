import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AboutpageComponent,
    AboutHeaderComponent,
    IframeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
