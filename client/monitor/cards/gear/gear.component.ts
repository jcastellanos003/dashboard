import { Component, Input } from '@angular/core';

import { FooterDefinition } from '../../../shared/models';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'gear',
    templateUrl: 'gear.component.html',
    styleUrls: ['./gear.component.scss']
})

export class GearComponent {
    @Input() tileInfo: FooterDefinition;

    constructor(private sharedConstants: SharedConstants) {
    }

    get gearPosition(): string {
        return this.isExtended ? 'On' : 'Off';
    }

    get isExtended(): boolean {
        return this.tileInfo.value === this.sharedConstants.EXTENDED;
    }
}