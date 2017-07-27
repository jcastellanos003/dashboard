import { Component, Input } from '@angular/core';

@Component({
    selector: 'gear',
    templateUrl: 'gear.component.html',
    styleUrls: ['./gear.component.scss']
})

export class GearComponent {
    @Input() gearLanding: boolean;

    get gearPosition(): string {
        return this.gearLanding ? 'On' : 'Off';
    }
}
