import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from './chatmessage.model';

@Component({
    moduleId: module.id,
    selector: 'chatmessage',
    templateUrl: 'chatmessage.component.html'
})
export class ChatMessageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() message: ChatMessageModel;

}