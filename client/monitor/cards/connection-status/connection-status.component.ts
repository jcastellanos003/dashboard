import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'connection-status',
    templateUrl: 'connection-status.component.html',
    styleUrls: ['./connection-status.component.scss']
})

export class ConnectionStateComponent implements OnChanges {
    @Input() status: string;
    @Input() milliseconds: number;

    private countDown: number = 0;
    private ticks: number = 1000;
    private timer: any;

    constructor(private sharedConstants: SharedConstants) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['status']) {
            this.startCountDown();
        }
    }

    get statusImage(): string {
        switch (this.status) {
            case this.sharedConstants.CONN_STATUS.ONLINE:
                return `${this.sharedConstants.URI_IMG}wifi_on.svg`;
            case this.sharedConstants.CONN_STATUS.OFFLINE:
                return `${this.sharedConstants.URI_IMG}wifi_off.svg`;
            case this.sharedConstants.CONN_STATUS.CONNECTING:
                default:
                    return `${this.sharedConstants.URI_IMG}wifi_connecting.svg`;
        }
    }

    get connectionLabel(): string {
        if (this.status === this.sharedConstants.CONN_STATUS.OFFLINE) {
            return `Reconnecting in ${this.countDown / 1000} seconds`;
        }
        return 'Connection State';
    }

    private startCountDown(): void {
        if (this.status === this.sharedConstants.CONN_STATUS.OFFLINE) {
            this.countDown = this.milliseconds;
            this.timer = setInterval(() => {
                console.log('countdown');
                this.countDown = this.countDown - this.ticks;
            }, this.ticks);
            return;
        }
        if (this.timer) clearTimeout(this.timer);
    }
}