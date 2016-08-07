import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component'
import { AuthService } from './shared/auth.service';
import { AppHeader } from './app-header';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
  directives: [AppHeader, RoomsComponent],
  providers: [AuthService]
})
export class AppComponent {
  constructor(private auth: AuthService){ }

  title: string = 'Firebase Chat';

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }

}
