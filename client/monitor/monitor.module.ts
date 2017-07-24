import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor.routes.module';
import { SharedModule } from '../shared/shared.module';


import { MonitorComponent, SpeedComponent, AltitudeComponent, StatisticsComponent,
    SwitchComponent, GearComponent, FlapsComponent, ConnectionStateComponent
} from './';

@NgModule({
    declarations: [
        MonitorComponent,
        SpeedComponent,
        AltitudeComponent,
        SwitchComponent,
        GearComponent,
        FlapsComponent,
        ConnectionStateComponent,
        StatisticsComponent
    ],
    imports: [
        MonitorRoutingModule,
        SharedModule
    ]
})
export class MonitorModule {
}