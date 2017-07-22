import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { MonitorComponent } from './monitor.component';

describe('MonitorComponent', () => {
    let fixture: ComponentFixture<MonitorComponent>;
    let component: MonitorComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MonitorComponent
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