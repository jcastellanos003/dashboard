import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';


import { AltitudeComponent } from './altitude.component';
import { TileComponent, GaugeComponent } from '../../../shared/components';
import { UtilsService } from '../../../shared/services';
import { SharedConstants } from '../../../shared/shared.constants';

import { UtilsServiceStub } from '../../../test/sharedStubServices';

describe('AltitudeComponent', () => {
    let fixture: ComponentFixture<AltitudeComponent>;
    let component: AltitudeComponent;

    const altitudeMock = {
        big: {
            value: 1
        },
        middle: {
            value: 2
        },
        short: {
            value: 5
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AltitudeComponent,
                TileComponent,
                GaugeComponent
            ],
            providers: [
                SharedConstants,
                {
                    provide: UtilsService,
                    useClass: UtilsServiceStub
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AltitudeComponent);
        component = fixture.componentInstance;

        component.currentAltitude = 12500;
        component['altitude'] = <any>altitudeMock;

        fixture.detectChanges();
    });

    it('should have an instance of altitude component', () => {
        expect(component).toBeDefined();
    });

    it('tile info should be defined', () => {
        let tileInfo = {
            image: '../../assets/images/altitude.svg',
            value: 0,
            title: 'Feet',
            legend: 'Average'
        };
        expect(component['tileInfo']).toEqual(tileInfo);
    });

    it('needle base should be defined', () => {
        let needleBase = {
            colorMajorTicks: '#fff',
            colorMinorTicks: '#fff',
            colorNumbers: '#2a2424',
            colorPlate: '#EDEDED',
            colorPlateEnd: '#EDEDED',
            highlights: '[{ "from": 0, "to": 10, "color": "#C8C8C8" }]',
            majorTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            maxValue: 10,
            minValue: 0,
            needleType: 'arrow',
            title: 'Altitude',
            units: 'Feet',
            needle: true,
            needleEnd: 80,
            valueBox: false
        };
        expect(component['gaugeConfigNeedleBase']).toEqual(needleBase);
    });

    it('altitude should be updated', () => {
        component.currentAltitude = 18700;
        component.ngOnChanges({
            currentAltitude: new SimpleChange(null, 18700, false)
        });
        fixture.detectChanges();
        expect(component.currentAltitude).toEqual(18700);
    });
});