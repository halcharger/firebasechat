import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number) {
    return this.auth$.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGoogle() {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter() {
    return this.signIn(AuthProviders.Twitter);
  }

  signInWithFacebook() {
    return this.signIn(AuthProviders.Facebook);
  }

  signOut(): void {
    this.auth$.logout();
  }
}
