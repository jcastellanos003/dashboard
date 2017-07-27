import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MonitorRoutingModule } from './monitor.routes.module';
import { SharedModule } from '../shared/shared.module';


import { monitorComponents, MonitorWsService, ConnectionStatusService } from './';

@NgModule({
    declarations: [
        ...monitorComponents
    ],
    imports: [
        MonitorRoutingModule,
        SharedModule,
        FormsModule
    ],
    providers: [
        MonitorWsService,
        ConnectionStatusService
    ]
})
export class MonitorModule {
}