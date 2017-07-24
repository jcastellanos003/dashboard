import { Component } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { MonitorComponent, SpeedComponent, AltitudeComponent, SwitchComponent,
    ConnectionStateComponent, FlapsComponent, GearComponent, StatisticsComponent
} from '../';
import { TileComponent, TileFooterComponent, GaugeComponent, TileSmallComponent } from '../../shared/components';
import { SharedConstants } from '../../shared/shared.constants';
import { UtilsService } from '../../shared/services';

@Component({
    selector: 'radial-gauge',
    template: '<h4>Component stub</h4>'
})
export class RadialGaugeComponent {
    constructor() {}
}

describe('MonitorComponent', () => {
    let fixture: ComponentFixture<MonitorComponent>;
    let component: MonitorComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MonitorComponent,
                SpeedComponent,
                AltitudeComponent,
                TileComponent,
                TileFooterComponent,
                TileSmallComponent,
                GaugeComponent,
                RadialGaugeComponent,
                SwitchComponent,
                ConnectionStateComponent,
                FlapsComponent,
                GearComponent,
                StatisticsComponent
            ],
            providers: [
                SharedConstants,
                UtilsService
            ]
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
