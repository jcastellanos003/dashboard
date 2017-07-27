import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileComponent, TileFooterComponent, GaugeComponent, TileSmallComponent } from './components';
import { UtilsService } from './services';
import { SharedConstants } from './shared.constants';

import { GaugesModule } from 'ng-canvas-gauges/src';

export const APP_HOST = 'interview.dev.ctx.ef.com/telemetry';

export const AppConfigInjectables: any = {
    provide: APP_HOST, useValue: APP_HOST
};

@NgModule({
    declarations: [
        TileComponent,
        TileFooterComponent,
        TileSmallComponent,
        GaugeComponent
    ],
    providers: [
        SharedConstants,
        UtilsService,
        AppConfigInjectables
    ],
    imports: [
        CommonModule,
        GaugesModule
    ],
    exports: [
        CommonModule,
        GaugesModule,
        TileComponent,
        TileSmallComponent,
        GaugeComponent
    ]
})
export class SharedModule {
}