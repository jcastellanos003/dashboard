import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonitorComponent } from './';

@NgModule({
    imports: [ RouterModule.forChild([
        { path: 'monitor', component: MonitorComponent }
    ]) ],
    exports: [ RouterModule ]
})
export class MonitorRoutingModule {
}