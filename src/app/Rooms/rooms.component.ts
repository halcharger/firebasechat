import { Component, OnInit } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { NicknameComponent } from './nick/nick.component';
import { RoomModel } from './room/room.model';
import { RoomsService } from '../shared/rooms.service';

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html',
    directives: [RoomComponent, NicknameComponent],
    providers: [RoomsService],
    styleUrls: ['rooms.component.css']
})
export class RoomsComponent implements OnInit {
    constructor(private roomsService: RoomsService) {
    }

    ngOnInit() { }

    newRoomName: string;

    onClick(room:RoomModel) {
        console.log('selecting room: ', room.name);
        this.roomsService.setSelectedRoom(room);
    }

    addRoom() {
        this.roomsService.addRoom(this.newRoomName)
        this.newRoomName = null;
    }
}