import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'room',
    templateUrl: 'room.component.html'
})
export class RoomComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() roomName: string = 'test room name';

}