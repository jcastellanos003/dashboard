import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { ConnectionStatusService } from './connection-status.service';
import { SharedConstants } from '../../shared/shared.constants';
import { MonitorService } from '../../shared/models';
import { APP_HOST } from '../../shared/shared.module';

@Injectable()
export class MonitorWsService implements MonitorService {
    private websocket: WebSocket;

    constructor(
        @Inject(APP_HOST) private appHost: string,
        private sharedConstants: SharedConstants,
        private statusService: ConnectionStatusService
    ) { }

    sendControlMessage(controlMessage: any): void {
        return this.websocket.send(controlMessage);
    }

    getData(): Observable<any> {
        this.websocket = new WebSocket(`ws://${this.appHost}`);
        return this.handleHooks();
    }

     private handleHooks(): Observable<any> {
        this.websocket.onopen = () => {
            this.statusService.setNotification({
                action: this.sharedConstants.CONN_STATUS.ONLINE
            });
        };
        return Observable.create((observer: Observer<any>) => {
            this.websocket.onmessage = (value: any) => {
                observer.next(value);
            };
            this.websocket.onclose = (value: any) => {
                this.statusService.setNotification({
                    action: this.sharedConstants.CONN_STATUS.OFFLINE
                });
            };
        }).map(res => res.data);
    }
}
