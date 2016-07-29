import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component'
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
  directives: [RoomsComponent, StoreLogMonitorComponent]
})
export class AppComponent {
  title: string = 'Firebase Chat';
}
