import { Component, OnInit, Input } from '@angular/core';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageComponent } from './chatmessage.component';
import { RoomModel } from './room.model';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store';
import { AddMsg } from '../../shared/actions';

@Component({
    moduleId: module.id,
    selector: 'room',
    templateUrl: 'room.component.html',
    directives: [ChatMessageComponent]
})
export class RoomComponent implements OnInit {
    constructor(private _store: Store<AppState>) {
        _store.select('selectedRoom').subscribe(r => this.room = r);
        this.messages = _store.select('chatMessages');
        _store.select('nickname').subscribe(n => this.nickname = n);
    }

    ngOnInit() { }

    newMsg: string;
    nickname: any;
    room: any;
    messages: any;

    addMsg() {
        this._store.dispatch(AddMsg({user:this.nickname, msg: this.newMsg, timestamp:new Date().toString()}))
        this.newMsg = undefined;
    }

    
}