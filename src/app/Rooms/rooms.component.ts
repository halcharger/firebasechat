import { Component, OnInit } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { NicknameComponent } from './nick/nick.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomModel } from './room/room.model';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/store';
import { Observable } from 'rxjs/RX';
import { AddRoom, SelectRoom } from '../shared/actions';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';


@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html',
    directives: [RoomComponent, NicknameComponent]
})
export class RoomsComponent implements OnInit {
    constructor(_af: AngularFire, private store: Store<AppState>) {
        //this.rooms = _af.database.list('rooms');
        this.rooms = store.select('rooms');
    }

    ngOnInit() { }

    rooms: any;

    onClick(room:RoomModel) {
        this.store.dispatch(SelectRoom(room));
    }

    showRooms: boolean;

    newRoomName: string;

    addRoom() {
        this.store.dispatch(AddRoom({name:this.newRoomName}))
        this.newRoomName = null;
        console.log('this.rooms: ', this.rooms);
    }
}