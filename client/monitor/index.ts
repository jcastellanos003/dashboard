// explicit export

export * from './layout/monitor-layout.component';
export * from './cards/speed/speed.component';
export * from './cards/altitude/altitude.component';
export * from './cards/switch/switch.component';
export * from './cards/gear/gear.component';
export * from './cards/flaps/flaps.component';
export * from './cards/connection-status/connection-status.component';
export * from './cards/statistics/statistics.component';
export * from './cards/landing/landing.component';

export * from './providers/monitor-ws.service';
export * from './providers/connection-status.service';

// export using defined object

import { MonitorComponent } from './layout/monitor-layout.component';
import { SpeedComponent } from './cards/speed/speed.component';
import { AltitudeComponent } from './cards/altitude/altitude.component';
import { SwitchComponent } from './cards/switch/switch.component';
import { GearComponent } from './cards/gear/gear.component';
import { FlapsComponent } from './cards/flaps/flaps.component';
import { ConnectionStateComponent } from './cards/connection-status/connection-status.component';
import { FooterLandingComponent } from './cards/landing/landing.component';
import { StatisticsComponent } from './cards/statistics/statistics.component';

export const monitorComponents = [
    MonitorComponent,
    SpeedComponent,
    AltitudeComponent,
    SwitchComponent,
    GearComponent,
    FlapsComponent,
    ConnectionStateComponent,
    StatisticsComponent,
    FooterLandingComponent
];