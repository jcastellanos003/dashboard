import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';


import { FlapsComponent } from './flaps.component';
import { TileComponent } from '../../../shared/components';
import { SharedConstants } from '../../../shared/shared.constants';

describe('FlapsComponent', () => {
    let fixture: ComponentFixture<FlapsComponent>;
    let component: FlapsComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FlapsComponent,
                TileComponent
            ],
            providers: [
                SharedConstants
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlapsComponent);
        component = fixture.componentInstance;

        component.flapPosition = 2;

        fixture.detectChanges();
    });

    it('should have an instance of flaps component', () => {
        expect(component).toBeDefined();
    });

    it('should have defined tileInfo prop', () => {
        let tileInfo = {
            image: '../../assets/images/flaps.svg',
            title: 'Flaps',
            legend: 'Current',
            value: this.flapPosition
        };
        expect(component['tileInfo']).toEqual(tileInfo);
    });

});