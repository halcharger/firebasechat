import { Component, OnInit } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { NicknameComponent } from './nick/nick.component';
import { SharedStateService } from '../sharedstate.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomModel } from './room/room.model';

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html',
    directives: [RoomComponent, NicknameComponent],
    providers: [SharedStateService]
})
export class RoomsComponent implements OnInit {
    constructor(_sharedState: SharedStateService, _af: AngularFire) {
        this.showRooms = _sharedState.nick === null;
        this.rooms = _af.database.list('rooms');
    }

    ngOnInit() { }

    public selectedRoom: RoomModel = {name:''};

    rooms: FirebaseListObservable<RoomModel[]>;

    onClick(room) {
        this.selectedRoom = room;
    }

    showRooms: boolean;

    newRoomName: string;

    addRoom() {
        this.rooms.push({name: this.newRoomName});
        this.newRoomName = null;
    }
}