import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeltsComponent } from './pages/belts/belts.component';
import { BracesComponent } from './pages/braces/braces.component';
import { HandkerchiefComponent } from './pages/handkerchief/handkerchief.component';
import { ScarvesComponent } from './pages/scarves/scarves.component';
import { SocksComponent } from './pages/socks/socks.component';
import { TiesComponent } from './pages/ties/ties.component';

const routes: Routes = [
  {
    path:'belts',
    component:BeltsComponent
  },
  {
    path:'braces',
    component:BracesComponent
  },
  {
    path:'handkerchief',
    component:HandkerchiefComponent
  },
  {
    path:'scarves',
    component:ScarvesComponent
  },
  {
    path:'socks',
    component:SocksComponent
  },
  {
    path:'ties',
    component:TiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplementsRoutingModule { }
