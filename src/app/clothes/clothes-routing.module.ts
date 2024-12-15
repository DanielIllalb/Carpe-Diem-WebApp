import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSizesComponent } from './components/edit-sizes/edit-sizes.component';
import { MancoatsDetailsComponent } from './components/mancoats-details/mancoats-details.component';
import { ManpantsDetailsComponent } from './components/manpants-details/manpants-details.component';
import { ManshirtsDetailsComponent } from './components/manshirts-details/manshirts-details.component';
import { MansuitsDetailsComponent } from './components/mansuits-details/mansuits-details.component';
import { MansweatersDetailsComponent } from './components/mansweaters-details/mansweaters-details.component';
import { MantshirtsDetailsComponent } from './components/mantshirts-details/mantshirts-details.component';
import { WomencoatDetailsComponent } from './components/womencoat-details/womencoat-details.component';
import { WomendressesDetailsComponent } from './components/womendresses-details/womendresses-details.component';
import { WomenpantsDetailsComponent } from './components/womenpants-details/womenpants-details.component';
import { WomensweatersDetailsComponent } from './components/womensweaters-details/womensweaters-details.component';
import { WomentshirtsDetailsComponent } from './components/womentshirts-details/womentshirts-details.component';
import { MancoatsComponent } from './pages/man/mancoats/mancoats.component';
import { ManpantsComponent } from './pages/man/manpants/manpants.component';
import { ManshirtsComponent } from './pages/man/manshirts/manshirts.component';
import { MansuitsComponent } from './pages/man/mansuits/mansuits.component';
import { MansweatersComponent } from './pages/man/mansweaters/mansweaters.component';
import { MantShirtsComponent } from './pages/man/mant-shirts/mant-shirts.component';
import { WomencoatsComponent } from './pages/women/womencoats/womencoats.component';
import { WomendressesComponent } from './pages/women/womendresses/womendresses.component';
import { WomenpantsComponent } from './pages/women/womenpants/womenpants.component';
import { WomensweatersComponent } from './pages/women/womensweaters/womensweaters.component';
import { WomentShirtsComponent } from './pages/women/woment-shirts/woment-shirts.component';

const routes: Routes = [
  {
    path:'man/man-coats',
    component:MancoatsComponent
  },
    {
      path:'man/man-coats/details/:id',
      component:MancoatsDetailsComponent
    },
    {
      path: 'man/man-coats/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'man/man-suits',
    component:MansuitsComponent
  },
    {
      path:'man/man-suits/details/:id',
      component:MansuitsDetailsComponent
    },
    {
      path:'man/man-suits/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'man/man-shirts',
    component:ManshirtsComponent
  },
    {
      path:'man/man-shirts/details/:id',
      component:ManshirtsDetailsComponent
    },
    {
      path:'man/man-shirts/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'man/man-t-shirts',
    component:MantShirtsComponent
  },
    {
      path:'man/man-t-shirts/details/:id',
      component:MantshirtsDetailsComponent
    },
    {
      path:'man/man-t-shirts/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'man/man-sweaters',
    component:MansweatersComponent
  },
    {
      path:'man/man-sweaters/details/:id',
      component:MansweatersDetailsComponent
      
    },
    {
      path:'man/man-sweaters/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'man/man-pants',
    component:ManpantsComponent
  },
    {
      path:'man/man-pants/details/:id',
      component:ManpantsDetailsComponent
    },
    {
      path:'man/man-pants/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'women/women-coats',
    component:WomencoatsComponent
  },
  {
    path: 'women/women-coats/details/:id',
    component:WomencoatDetailsComponent
  },
    {
      path: 'women/women-coats/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'women/women-dresses',
    component:WomendressesComponent
  },
    {
      path:'women/women-dresses/details/:id',
      component:WomendressesDetailsComponent
    },
    {
      path:'women/women-dresses/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'women/women-pants',
    component:WomenpantsComponent
  },
    {
      path:'women/women-pants/details/:id',
      component: WomenpantsDetailsComponent
    },
    {
      path:'women/women-pants/edit/:id',
      component:EditSizesComponent
    },
  {
    path:'women/women-t-shirts',
    component:WomentShirtsComponent
  },
    {
      path:'women/women-t-shirts/details/:id',
      component:WomentshirtsDetailsComponent
    },
    {
      path:'women/women-t-shirts/edit/:id',
      component:EditSizesComponent,
    },
  {
    path:'women/women-sweaters',
    component:WomensweatersComponent
  },
    {
      path:'women/women-sweaters/details/:id',
      component:WomensweatersDetailsComponent
    },
    {
      path:'women/women-sweaters/edit/:id',
      component:EditSizesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
