import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent, LogoComponent } from '../';

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;

    const appTitle: string = 'Aircraft Dashboard Monitor';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HeaderComponent,
                LogoComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should have an instance of header component', () => {
        expect(component).toBeDefined();
    });

    it('default title with name of the application', () => {
        let el = fixture.debugElement.query(By.css('.header__container--title'));
        expect(el.nativeElement.textContent).toContain(appTitle);
    });

    it('should contain an image with settings icon', () => {
        let el = fixture.debugElement.query(By.css('.header__container--settings')).children[0].children[0];
        expect(el.name).toEqual('img');
        expect(el.attributes['src']).toContain('assets/images/settings.svg');
    });
});