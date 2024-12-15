import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClothesComponent } from './add-clothes/add-clothes.component';
import { permissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path:'clothes',
    loadChildren: () => import('./clothes/clothes.module').then(m => m.ClothesModule)
  },
  {
    path:'complements',
    loadChildren: () => import('./complements/complements.module').then(m => m.ComplementsModule)
  },
  {
    path:'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'basket',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'add-clothes',
    component:AddClothesComponent,
    canActivate:[permissionsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
