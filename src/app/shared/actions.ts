import { Action } from '@ngrx/store';
import { RoomModel } from '../rooms/room/room.model';
import { ChatMessageModel } from '../rooms/room/chatmessage.model';

export const ADDROOM: string = 'ADD ROOM';
export const AddRoom = (room: RoomModel): Action => { return { type: ADDROOM, payload: room } };

export const SELECTROOM: string = 'SELECT ROOM';
export const SelectRoom = (room: RoomModel): Action => { return { type: SELECTROOM, payload: room} };

export const CHANGENICKNAME: string = 'CHANGE NICKNAME';
export const ChangeNickname = (nickname: string): Action => { return { type: CHANGENICKNAME, payload: nickname} ;}

export const ADDMSG: string = 'ADD MSG';
export const AddMsg = (msg: ChatMessageModel): Action => { return { type: ADDMSG, payload: msg} };
