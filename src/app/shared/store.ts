import { provideStore } from '@ngrx/store';
import { rooms, selectedRoom, nickname, chatMessages } from './reducers';
import { RoomModel } from '../rooms/room/room.model';
import { ChatMessageModel } from '../rooms/room/chatmessage.model';

export interface AppState {
    rooms: RoomModel[];
    selectedRoom: RoomModel;
    nickname: string;
    chatMessages: ChatMessageModel[]
}

const initialAppState: AppState = {
    rooms: [],
    selectedRoom: {name:''},
    nickname: '',
    chatMessages: []
};

export const store = provideStore({rooms, selectedRoom, nickname, chatMessages}, initialAppState);