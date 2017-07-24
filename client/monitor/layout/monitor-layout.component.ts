import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { FooterDefinition } from '../../shared/models';
import { SharedConstants } from '../../shared/shared.constants';

@Component({
    selector: 'monitor',
    templateUrl: 'monitor-layout.component.html',
    styleUrls: ['./monitor-layout.component.scss']
})

export class MonitorComponent {
    private currentSpeed: number = 0;
    private currentAltitude: number = 0;

    private counter: number = 0;
    private counterAltitude: number = 0;

    private gearInfo: FooterDefinition;

    private flapPosition: number = 0;

    constructor(private sharedConstants: SharedConstants) {
        this.gearInfo = this.sharedConstants.GearLandingInfo;
        Observable
            .interval(2000)
            .subscribe((value: number) => {
                this.counter++;
                if (this.counter <= 5) {
                    this.currentSpeed = Math.floor((Math.random() * 420) + 0);
                }
            });
        Observable
            .interval(2000)
            .subscribe((value: number) => {
                this.counterAltitude++;
                if (this.counterAltitude <= 5) {
                    this.currentAltitude = Math.floor((Math.random() * 1000) + 0);
                }
            });
    }

    toggleGearLanding($event: FooterDefinition): void {
        this.gearInfo = $event;
    }

    flapChange($event: any): void {
        if ($event >= 0 && $event <= 5) {
            this.flapPosition = $event;
            switch (this.flapPosition) {
                case 0: this.currentSpeed = Math.floor((Math.random() * 100) + 320);
                    break;
                case 1: this.currentSpeed = Math.floor((Math.random() * 100) + 220);
                    break;
                case 2: this.currentSpeed = Math.floor((Math.random() * 100) + 120);
                    break;
                case 3: this.currentSpeed = Math.floor((Math.random() * 40) + 80);
                    break;
                case 4: this.currentSpeed = Math.floor((Math.random() * 40) + 40);
                    break;
                case 5: this.currentSpeed = Math.floor((Math.random() * 40) + 0);
                    break;
            }
        }
    }
}