import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {
    @Input() gearLanding: boolean;
    @Output() onToggleSwitch = new EventEmitter<number>();

    constructor(private sharedConstants: SharedConstants) {
    }

    onToggleGearLanding(): void {
        this.onToggleSwitch.emit(this.gearLanding ? 0 : 1);
    }

    get switchImage(): string {
        return this.gearLanding ?
            `${this.sharedConstants.URI_IMG}switch_on.svg` :
            `${this.sharedConstants.URI_IMG}switch_off.svg`;
    }
}