import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { GearComponent } from './gear.component';
import { FooterLandingComponent } from '../landing/landing.component';
import { TileComponent } from '../../../shared/components';

import { SharedConstants } from '../../../shared/shared.constants';

describe('GearComponent', () => {
    let fixture: ComponentFixture<GearComponent>;
    let component: GearComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GearComponent,
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
        fixture = TestBed.createComponent(GearComponent);
        component = fixture.componentInstance;

        component.gearLanding = false;

        fixture.detectChanges();
    });

    it('should have an instance of gear component', () => {
        expect(component).toBeDefined();
    });

    it('gear position should be off', () => {
        expect(component['gearPosition']).toBe('Off');
    });

    it('gear position should be on', () => {
        component.gearLanding = true;
        expect(component['gearPosition']).toBe('On');
    });

});