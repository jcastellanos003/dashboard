import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FooterDefinition } from '../../../shared/models';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'flaps',
    templateUrl: 'flaps.component.html',
    styleUrls: ['./flaps.component.scss']
})

export class FlapsComponent {
    @Input() flapPosition: number;
    @Output() onFlapChange = new EventEmitter<number>();

    private tileInfo: FooterDefinition;

    constructor(private sharedConstants: SharedConstants) {
        this.setInitialState();
    }

    setInitialState(): void {
        this.tileInfo = {
            image: this.sharedConstants.CARD_IMAGES.flaps,
            title: 'Flaps',
            legend: 'Current',
            value: this.flapPosition
        };
    }

    flapChange(position: number): void {
        this.onFlapChange.emit(position);
    }
}