import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { NotificationEventEmitter, DashboardModel,
    ControlMessage, Telemetry, MonitorService } from '../../shared/models';

import { SharedConstants } from '../../shared/shared.constants';

import { UtilsService } from '../../shared/services';
import { MonitorWsService } from '../providers/monitor-ws.service';
import { ConnectionStatusService } from '../providers/connection-status.service';

@Component({
    selector: 'monitor',
    templateUrl: 'monitor-layout.component.html',
    styleUrls: ['./monitor-layout.component.scss']
})

export class MonitorComponent implements OnInit, OnDestroy {
    private currentStatus: string;
    private dashboard: DashboardModel<ControlMessage, Telemetry> = new DashboardModel();
    private reconnectMilliseconds: number = 5000;
    private onConnectionChanged: Observable<NotificationEventEmitter>;
    private monitorService: MonitorService;

    constructor(
        monitorWsService: MonitorWsService,
        private sharedConstants: SharedConstants,
        private connectionStatusService: ConnectionStatusService,
        private utilsService: UtilsService
    ) {
        this.monitorService = monitorWsService;
        this.setInitialState();
    }

    ngOnInit(): void {
        this.subscribeMonitorData();
        this.subscribeConnection();
    }

    ngOnDestroy(): void {
        this.connectionStatusService.takeUntilListener();
    }

    toggleGearLanding($event: number): void {
        this.dashboard.control.landing_gear = $event;
        this.sendMessage({ control: { landing_gear: $event } });
    }

    flapChange($event: number): void {
        if ($event >= 0 && $event <= 5) {
            this.dashboard.control.flaps = $event;
            this.sendMessage({ control: { flaps: $event } });
        }
    }

    sendMessage(message: any): void {
        this.monitorService.sendControlMessage(JSON.stringify(message));
    }

    private setInitialState(): void {
        this.setDashboardInstance();
        this.currentStatus = this.sharedConstants.CONN_STATUS.CONNECTING;
        this.onConnectionChanged = this.connectionStatusService.getNotificationInstance();
    }

    private setDashboardInstance(): void {
        this.dashboard.telemetry.airspeed = 0;
        this.dashboard.telemetry.altitude = 0;
        this.dashboard.control.flaps = 0;
        this.dashboard.control.landing_gear = 0;
    }

    private subscribeMonitorData(): void {
        this.monitorService.getData()
            .subscribe((data: string) => {
                if (!this.utilsService.testIncomingObject(data, this.dashboard)) return;
                this.updateState(<any>JSON.parse(data));
            });
    }

    private updateState(data: DashboardModel<ControlMessage, Telemetry>): void {
        this.dashboard = data;
    }

    private subscribeConnection(): void {
        this.onConnectionChanged.subscribe((status: NotificationEventEmitter) => {
            this.currentStatus = status.action;
            this.validateReconnection();
        });
    }

    private validateReconnection(): void {
        if (this.currentStatus === this.sharedConstants.CONN_STATUS.OFFLINE) {
            setTimeout(() => {
                this.currentStatus = this.sharedConstants.CONN_STATUS.CONNECTING;
                this.subscribeMonitorData();
            }, this.reconnectMilliseconds);
        }
    }

    get currentGear(): boolean {
        return !!(this.dashboard.control.landing_gear);
    }
}