import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  //init firebase app
  defaultFirebase({
    apiKey: "AIzaSyBnLH0tKs_eSkhC-E_qnLm5Y4r5CVwhSSk",
    authDomain: "fir-chat-93669.firebaseapp.com",
    databaseURL: "https://fir-chat-93669.firebaseio.com",
    storageBucket: "fir-chat-93669.appspot.com"
  })
]);

