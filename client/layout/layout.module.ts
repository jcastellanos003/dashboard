import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout.routes.module';
import { SharedModule } from '../shared/shared.module';

import { MonitorComponent } from './';

@NgModule({
    declarations: [
        MonitorComponent
    ],
    imports: [
        LayoutRoutingModule,
        SharedModule
    ]
})
export class LayoutModule {
}