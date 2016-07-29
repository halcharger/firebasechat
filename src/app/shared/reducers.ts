import { ActionReducer, Action } from '@ngrx/store';
import { RoomModel } from '../rooms/room/room.model';
import { ChatMessageModel } from '../rooms/room/chatmessage.model';
import { ADDROOM, SELECTROOM, CHANGENICKNAME, ADDMSG } from './actions';
import { AppState } from './store';

export const rooms: ActionReducer<RoomModel[]> = (state: RoomModel[] = [], action: Action) => {
    switch (action.type) {
        case ADDROOM:
            return state.concat(action.payload);
        default:
            return state;
    }
};

export const selectedRoom: ActionReducer<RoomModel> = (state: RoomModel = undefined, action: Action) => {
    switch (action.type) {
        case SELECTROOM:
            return action.payload;
        default:
            return state;;
    }
};

export const nickname: ActionReducer<string> = (state: string = '', action: Action) =>{
    switch (action.type) {
        case CHANGENICKNAME:
            return action.payload;
        default:
            return state;;
    }
};

export const chatMessages: ActionReducer<ChatMessageModel[]> = (state: ChatMessageModel[] = [], action: Action) => {
    switch (action.type) {
        case SELECTROOM:
            return [];
        case ADDMSG:
            return state.concat(action.payload);
        default:
            return state;
    }
};