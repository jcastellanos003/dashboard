import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NotificationEventEmitter } from '../../shared/models';

@Injectable()
export class ConnectionStatusService {
    private listener: Subject<NotificationEventEmitter> = new Subject<NotificationEventEmitter>();

    setNotification(evt: NotificationEventEmitter): void {
        this.listener.next(evt);
    }

    getNotificationInstance(): Observable<NotificationEventEmitter> {
        this.listener = new Subject<NotificationEventEmitter>();
        return this.listener.asObservable();
    }

    takeUntilListener(): void {
        this.listener.unsubscribe();
    }
}
