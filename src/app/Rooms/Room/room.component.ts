import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageComponent } from './chatmessage.component';
import { RoomModel } from './room.model';

@Component({
    moduleId: module.id,
    selector: 'room',
    templateUrl: 'room.component.html',
    directives: [ChatMessageComponent]
})
export class RoomComponent implements OnInit {
    constructor() {
        this.messages = [
            {
                msg: 'message 1',
                user: 'user 1',
                timestamp: 'timestamp 1'
            },
            {
                msg: 'message 2',
                user: 'user 2',
                timestamp: 'timestamp 2'
            }

        ];
    }

    ngOnInit() { }

    @Input() room: RoomModel;

    messages: ChatMessageModel[];

}