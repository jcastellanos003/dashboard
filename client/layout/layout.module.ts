import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonitorModule } from '../monitor/monitor.module';

import { HeaderComponent, LogoComponent } from './';

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent
    ],
    imports: [
        RouterModule,
        MonitorModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class LayoutModule {
}