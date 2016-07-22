import { Component, OnInit } from '@angular/core';
import { RoomComponent } from '../room/room.component';

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html', 
    directives: [RoomComponent]
})
export class RoomsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public selectedRoom: string = '';

    rooms: string[] = [
        'room 1', 'room2', 'room3'
    ];

    onClick(room){
        this.selectedRoom = room;
    }
}