import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomsService } from '../../shared/rooms.service';

@Component({
    moduleId: module.id,
    selector: 'nickname',
    templateUrl: 'nick.component.html'
})
export class NicknameComponent implements OnInit {
    constructor(private roomsService: RoomsService) { }

    ngOnInit() { }

}