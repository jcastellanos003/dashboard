import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoComponent } from '../';

describe('LogoComponent', () => {
    let fixture: ComponentFixture<LogoComponent>;
    let component: LogoComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LogoComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should have an instance of header component', () => {
        expect(component).toBeDefined();
    });

    it('should contain an image with defualt logo', () => {
        let el = fixture.debugElement.query(By.css('.logo__img'));
        expect(el.name).toEqual('img');
        expect(el.attributes['src']).toContain('assets/images/helicopter.svg');
    });
});