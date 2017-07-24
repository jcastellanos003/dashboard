import { Component, Input } from '@angular/core';

@Component({
    selector: 'connection-status',
    templateUrl: 'connection-status.component.html',
    styleUrls: ['./connection-status.component.scss']
})

export class ConnectionStateComponent {
    @Input() status: number;
    constructor() { }
}