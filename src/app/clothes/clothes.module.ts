import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { ClothesRoutingModule } from './clothes-routing.module';
import { WomencoatsComponent } from './pages/women/womencoats/womencoats.component';
import { WomenpantsComponent } from './pages/women/womenpants/womenpants.component';
import { WomentShirtsComponent } from './pages/women/woment-shirts/woment-shirts.component';
import { WomensweatersComponent } from './pages/women/womensweaters/womensweaters.component';
import { MancoatsComponent } from './pages/man/mancoats/mancoats.component';
import { MansuitsComponent } from './pages/man/mansuits/mansuits.component';
import { MansweatersComponent } from './pages/man/mansweaters/mansweaters.component';
import { ManshirtsComponent } from './pages/man/manshirts/manshirts.component';
import { MantShirtsComponent } from './pages/man/mant-shirts/mant-shirts.component';
import { ManpantsComponent } from './pages/man/manpants/manpants.component';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { WomencoatDetailsComponent } from './components/womencoat-details/womencoat-details.component';
import { EditSizesComponent } from './components/edit-sizes/edit-sizes.component';
import { WomendressesComponent } from './pages/women/womendresses/womendresses.component';
import { WomendressesDetailsComponent } from './components/womendresses-details/womendresses-details.component';
import { WomensweatersDetailsComponent } from './components/womensweaters-details/womensweaters-details.component';
import { WomentshirtsDetailsComponent } from './components/womentshirts-details/womentshirts-details.component';
import { WomenpantsDetailsComponent } from './components/womenpants-details/womenpants-details.component';
import { MancoatsDetailsComponent } from './components/mancoats-details/mancoats-details.component';
import { MansuitsDetailsComponent } from './components/mansuits-details/mansuits-details.component';
import { MansweatersDetailsComponent } from './components/mansweaters-details/mansweaters-details.component';
import { ManshirtsDetailsComponent } from './components/manshirts-details/manshirts-details.component';
import { MantshirtsDetailsComponent } from './components/mantshirts-details/mantshirts-details.component';
import { ManpantsDetailsComponent } from './components/manpants-details/manpants-details.component';

@NgModule({
  declarations: [
    WomencoatsComponent,
    WomensweatersComponent,
    WomentShirtsComponent,
    WomenpantsComponent,
    MancoatsComponent,
    MansuitsComponent,
    MansweatersComponent,
    ManshirtsComponent,
    MantShirtsComponent,
    ManpantsComponent,
    FilterByTypePipe,
    WomencoatDetailsComponent,
    EditSizesComponent,
    WomendressesComponent,
    WomendressesDetailsComponent,
    WomensweatersDetailsComponent,
    WomentshirtsDetailsComponent,
    WomenpantsDetailsComponent,
    MancoatsDetailsComponent,
    MansuitsDetailsComponent,
    MansweatersDetailsComponent,
    ManshirtsDetailsComponent,
    MantshirtsDetailsComponent,
    ManpantsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClothesModule { }
