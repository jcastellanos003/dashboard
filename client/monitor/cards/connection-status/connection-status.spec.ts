import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { ConnectionStateComponent } from './connection-status.component';
import { UtilsService } from '../../../shared/services';
import { SharedConstants } from '../../../shared/shared.constants';

import { UtilsServiceStub } from '../../../test/sharedStubServices';

describe('ConnectionStatusComponent', () => {
    let fixture: ComponentFixture<ConnectionStateComponent>;
    let component: ConnectionStateComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ConnectionStateComponent
            ],
            providers: [
                SharedConstants
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConnectionStateComponent);
        component = fixture.componentInstance;

        component.status = 'Online';
        component.milliseconds = 5000;

        fixture.detectChanges();
    });

    it('should have an instance of connection status component', () => {
        expect(component).toBeDefined();
    });

    it('should change the status image if connected', () => {
        expect(component['statusImage']).toContain('assets/images/wifi_on.svg');
    });

    it('should change the status image if offline', () => {
        component.status = 'Offline';
        expect(component['statusImage']).toContain('assets/images/wifi_off.svg');
    });

    it('should change the status image if connecting', () => {
        component.status = 'Connecting';
        expect(component['statusImage']).toContain('assets/images/wifi_connecting.svg');
    });

    it('should change the footer label if different of offline', () => {
        component.status = 'Online';
        expect(component['connectionLabel']).toContain('Connection State');
    });
});