import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { FooterLandingComponent } from './landing.component';
import { TileComponent } from '../../../shared/components';

import { SharedConstants } from '../../../shared/shared.constants';

describe('LandingComponent', () => {
    let fixture: ComponentFixture<FooterLandingComponent>;
    let component: FooterLandingComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FooterLandingComponent,
                TileComponent,
                FooterLandingComponent
            ],
            providers: [
                SharedConstants
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterLandingComponent);
        component = fixture.componentInstance;

        component.gearLanding = false;

        fixture.detectChanges();
    });

    it('should have an instance of landing component', () => {
        expect(component).toBeDefined();
    });

    it('should have a tileInfo prop defined', () => {
        let tileInfo = {
            image: '../../assets/images/rim.svg',
            value: 'Retracted',
            legend: 'Current Landing'
        };
        expect(component['tileInfo']).toEqual(tileInfo);
    });

    it('should change image and value if gear landing change', () => {
        component.gearLanding = true;
        component.ngOnChanges({
            gearLanding: new SimpleChange(false, true, false)
        });
        fixture.detectChanges();
        expect(component['tileInfo'].value).toEqual('Extended');
        expect(component['tileInfo'].image).toEqual('../../assets/images/rim_green.svg');
    });

});