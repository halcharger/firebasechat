import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html'
})
export class SignInComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) { }

    signInWithFacebook(): void {
        this.auth.signInWithFacebook()
            .then(() => this.postSignIn());
    }

    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    signInWithTwitter(): void {
        this.auth.signInWithTwitter()
            .then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.router.navigate(['/rooms']);
    }

    ngOnInit() { }

}