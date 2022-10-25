import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'calc2',
    pathMatch: 'full'
  },
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then( m => m.CalcPageModule)
  },
  {
    path: 'calc2',
    loadChildren: () => import('./calc2/calc2.module').then( m => m.Calc2PageModule)
  },  {
    path: 'memoria-modal',
    loadChildren: () => import('./utils/memoria-modal/memoria-modal.module').then( m => m.MemoriaModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
