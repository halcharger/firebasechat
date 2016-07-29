import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store';
import { ChangeNickname } from '../../shared/actions';

@Component({
    moduleId: module.id,
    selector: 'nickname',
    templateUrl: 'nick.component.html'
})
export class NicknameComponent implements OnInit {
    constructor(private _store: Store<AppState>) { }

    ngOnInit() { }

    onNickChange(newNickInput){
        console.log('onNickChange(newNickInput): ', newNickInput.value);
        this._store.dispatch(ChangeNickname(newNickInput.value));
    }

}