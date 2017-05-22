import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => MainModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];

const opt = {
  enableTracing: false
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
