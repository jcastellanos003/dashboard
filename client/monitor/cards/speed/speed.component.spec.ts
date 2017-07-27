import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';


import { SpeedComponent } from './speed.component';
import { TileComponent, GaugeComponent } from '../../../shared/components';
import { UtilsService } from '../../../shared/services';
import { SharedConstants } from '../../../shared/shared.constants';

import { UtilsServiceStub } from '../../../test/sharedStubServices';

describe('SpeedComponent', () => {
    let fixture: ComponentFixture<SpeedComponent>;
    let component: SpeedComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SpeedComponent,
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
        fixture = TestBed.createComponent(SpeedComponent);
        component = fixture.componentInstance;

        component.currentSpeed = 245;

        fixture.detectChanges();
    });

    it('should have an instance of speed component', () => {
        expect(component).toBeDefined();
    });

    it('tile info should be defined', () => {
        let tileInfo = {
            image: '../../assets/images/speed.svg',
            value: 0,
            title: 'Knots',
            legend: 'Average'
        };
        expect(component['tileInfo']).toEqual(tileInfo);
    });

    it('needle config should be defined', () => {
        let needleConfig = {
            colorMajorTicks: '#fff',
            colorMinorTicks: '#fff',
            colorNumbers: '#2a2424',
            colorPlate: '#EDEDED',
            colorPlateEnd: '#EDEDED',
            highlights:
                '[{ "from": 0, "to": 200, "color": "#39B099" },' +
                '{ "from": 200, "to": 280, "color": "#EEC85F" },' +
                '{ "from": 280, "to": 360, "color": "#F7B356" },' +
                '{ "from": 360, "to": 420, "color": "#f44336" }]',
            majorTicks: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 420],
            maxValue: 420,
            minValue: 0,
            needleType: 'arrow',
            title: 'Airspeed',
            units: 'Knots',
            needle: true,
            needleEnd: 80,
            valueBox: true
        };
        expect(component['gaugeConfig']).toEqual(needleConfig);
    });

    it('speed should be updated', () => {
        component.currentSpeed = 341;
        component.ngOnChanges({
            currentAltitude: new SimpleChange(245, 341, false)
        });
        fixture.detectChanges();
        expect(component.currentSpeed).toEqual(341);
    });
});