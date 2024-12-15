import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementsRoutingModule } from './complements-routing.module';
import { TiesComponent } from './pages/ties/ties.component';
import { BeltsComponent } from './pages/belts/belts.component';
import { SocksComponent } from './pages/socks/socks.component';
import { ScarvesComponent } from './pages/scarves/scarves.component';
import { BracesComponent } from './pages/braces/braces.component';
import { HandkerchiefComponent } from './pages/handkerchief/handkerchief.component';


@NgModule({
  declarations: [
    TiesComponent,
    BeltsComponent,
    SocksComponent,
    ScarvesComponent,
    BracesComponent,
    HandkerchiefComponent
  ],
  imports: [
    CommonModule,
    ComplementsRoutingModule
  ]
})
export class ComplementsModule { }
