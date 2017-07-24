import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileComponent, TileFooterComponent, GaugeComponent, TileSmallComponent } from './components';
import { UtilsService } from './services';
import { SharedConstants } from './shared.constants';

import { GaugesModule } from 'ng-canvas-gauges/src';

@NgModule({
    declarations: [
        TileComponent,
        TileFooterComponent,
        TileSmallComponent,
        GaugeComponent
    ],
    providers: [
        SharedConstants,
        UtilsService
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