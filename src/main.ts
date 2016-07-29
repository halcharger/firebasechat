import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { store } from './app/shared/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { FirebaseDataStore } from './app/shared/firebase.datastore';


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
  }),
  store,
  /**
   * instrumentStore() sets up the @ngrx/store-devtools providers
   */
  instrumentStore({
    monitor: useLogMonitor({
      position: 'right',
      visible: true
    })
  }),
  FirebaseDataStore  
]).catch(err => console.error(err));

