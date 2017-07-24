import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { routes } from './app.routes.module';
import { DashboardApp } from './app.component';
import { HeaderComponent, LogoComponent } from '../layout';

describe('App Component', () => {
    let fixture: ComponentFixture<DashboardApp>;
    let component: DashboardApp;
    let router: Router;
    let location: Location;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                DashboardApp,
                HeaderComponent,
                LogoComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(DashboardApp);
        component = fixture.componentInstance;

        fixture.detectChanges();
        router.initialNavigation();
    });

    it ('should have an instance of app', () => {
        expect(component).toBeDefined();
    });

    it('should redirects to default', () => {
        router.navigate(['']);
        expect(location.path()).toBe('/');
    });
});