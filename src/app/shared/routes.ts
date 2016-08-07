import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { AuthGuard } from './AuthGuard';
import { NoAuthGuard } from './NoAuthGuard';
import { SignInComponent } from '../signin/signin.component';
import { RoomsComponent } from '../rooms/rooms.component';


const routes: RouterConfig = [
  {path: '', component: SignInComponent, canActivate: [NoAuthGuard]},
  {path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard]}
];


export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
