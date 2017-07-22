import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './app.routes.module';
import { LayoutModule } from '../layout/layout.module';

import { DashboardApp } from './app.component';

import '../assets/css/styles.scss';

@NgModule({
    declarations: [
        DashboardApp
    ],
    imports: [
        BrowserModule,
        DashboardRoutingModule,
        LayoutModule
    ],
    bootstrap: [ DashboardApp ]
})
export class DashboardAppModule {
}