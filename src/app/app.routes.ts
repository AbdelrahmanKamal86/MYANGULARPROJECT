import { Routes } from '@angular/router';
import { Female } from './female/female';
import { Child } from './child/child';
import { Continar } from './continar/continar';
import { Homepage } from './homepage/homepage';


export const routes: Routes = [
  {path:'homepage',component:Homepage},
  {path:'',component:Homepage},
  {path:"female",component:Female},
  {path:'child', component:Child},
  {path:'continar',component:Continar},
];
