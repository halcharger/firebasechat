import { Injectable } from '@angular/core';
import { RoomModel } from '../rooms/room/room.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs';


@Injectable()
export class RoomsService {

    constructor(private _af: AngularFire) {
        this.rooms = _af.database.list('rooms');
    }

    selectedRoom: RoomModel;
    nickname: string = '';

    rooms: FirebaseListObservable<any[]>;
    chatMessages : FirebaseListObservable<any[]>;

    addRoom(roomName: string){
        this.rooms.push({name:roomName});
    }

    addChatMsg(msg: string){
        console.log('this.chatMessages: ', this.chatMessages);
        this.chatMessages.push({msg, user: this.nickname, timestamp: 'now'})
    }

    setSelectedRoom(room: RoomModel){
        this.selectedRoom = room;
        this.chatMessages = this._af.database.list('room/' + room.$key);
    }

}