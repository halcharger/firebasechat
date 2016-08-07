import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'app-header.html'
})
export class AppHeader implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input() authenticated: boolean;
    @Output() signOut: EventEmitter<any> = new EventEmitter(false);

}