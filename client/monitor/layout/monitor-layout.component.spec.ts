import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { MonitorComponent, monitorComponents } from '../';

import { MonitorWsService } from '../providers/monitor-ws.service';
import { ConnectionStatusService } from '../providers/connection-status.service';

import { SharedConstants } from '../../shared/shared.constants';
import { SharedModule } from '../../shared/shared.module';
import { TileComponent, GaugeComponent, TileFooterComponent, TileSmallComponent } from '../../shared/components';
import { UtilsService } from '../../shared/services';

import { MonitorWsServiceStub, UtilsServiceStub } from '../../test/sharedStubServices';

@Component({
    selector: 'radial-gauge',
    template: '<h4>Component stub</h4>'
})
export class RadialGaugeComponent {
    constructor() {}
}

export const APP_HOST = 'interview.dev.ctx.ef.com/telemetry';

export const AppConfigInjectables: any = {
    provide: APP_HOST, useValue: APP_HOST
};

describe('MonitorComponent', () => {
    let fixture: ComponentFixture<MonitorComponent>;
    let component: MonitorComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TileComponent,
                GaugeComponent,
                TileFooterComponent,
                TileSmallComponent,
                ...monitorComponents
            ],
            providers: [
                {
                    provide: MonitorWsService,
                    useClass: MonitorWsServiceStub
                },
                {
                    provide: UtilsService,
                    useClass: UtilsServiceStub
                },
                SharedConstants,
                AppConfigInjectables,
                ConnectionStatusService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonitorComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should have an instance of monitor component', () => {
        expect(component).toBeDefined();
    });
});