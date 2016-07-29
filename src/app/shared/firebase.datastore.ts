import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { RoomModel } from '../rooms/room/room.model';

@Injectable()
export class FirebaseDataStore {

    constructor(private _store: Store<AppState>) {
        console.log('hooking up firebase....'); 
        this._store.select('selectedRoom').subscribe(r => this.getNewRoomChatMessages(r as RoomModel))
    }

    getNewRoomChatMessages(room: RoomModel){

    }

}