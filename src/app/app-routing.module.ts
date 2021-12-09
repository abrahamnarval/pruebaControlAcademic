import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './pages/home/home.component';
import { AddDogsComponent } from './pages/add-dogs/add-dogs.component';
import { ListDogsComponent } from './pages/list-dogs/list-dogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addDogs', component: AddDogsComponent},
  { path: 'listDogs', component: ListDogsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
