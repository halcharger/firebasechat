import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
  directives: [RoomsComponent]
})
export class AppComponent {
  title = 'app works!';
}
