import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageComponent } from './chatmessage.component';
import { RoomModel } from './room.model';
import { RoomsService } from '../../shared/rooms.service';

@Component({
    moduleId: module.id,
    selector: 'room',
    templateUrl: 'room.component.html',
    directives: [ChatMessageComponent]
})
export class RoomComponent implements OnInit {
    constructor(private roomsService: RoomsService) { }

    ngOnInit() { }

    newMsg: string;
    
    addMsg() {
        this.roomsService.addChatMsg(this.newMsg);
        this.newMsg = undefined;
    }

    
}