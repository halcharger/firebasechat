import { Component, OnInit } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { NicknameComponent } from './nick/nick.component';
import { SharedStateService } from '../sharedstate.service';

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html',
    directives: [RoomComponent, NicknameComponent],
    providers: [SharedStateService]
})
export class RoomsComponent implements OnInit {
    constructor(private _sharedState: SharedStateService) {
        this.showRooms = _sharedState.nick === null;
    }

    ngOnInit() { }

    public selectedRoom: string = '';

    rooms: string[] = [
        'room 1', 'room2', 'room3'
    ];

    onClick(room) {
        this.selectedRoom = room;
    }

    showRooms: boolean;

    newRoomName: string;

    addRoom() {
        this.rooms.push(this.newRoomName);
        this.newRoomName = null;
    }
}