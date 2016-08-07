import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from './app/shared/routes';
import { AUTH_PROVIDERS } from './app/shared';
import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBnLH0tKs_eSkhC-E_qnLm5Y4r5CVwhSSk",
    authDomain: "fir-chat-93669.firebaseapp.com",
    databaseURL: "https://fir-chat-93669.firebaseio.com",
    storageBucket: "fir-chat-93669.appspot.com"
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  }), 
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS
]).catch(err => console.error(err));

