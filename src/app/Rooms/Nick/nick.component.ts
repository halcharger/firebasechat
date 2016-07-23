import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../sharedstate.service';

@Component({
    moduleId: module.id,
    selector: 'nickname',
    templateUrl: 'nick.component.html',
    providers: [SharedStateService]
})
export class NicknameComponent implements OnInit {
    constructor(private _sharedState: SharedStateService) {
        this.nick = _sharedState.nick;
     }

    ngOnInit() { }

    nick:string;

    onNickChange(newNick){
        this._sharedState.nick = newNick;
    }

}