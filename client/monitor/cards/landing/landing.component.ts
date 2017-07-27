import { Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

import { FooterDefinition } from '../../../shared/models';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'landing',
    template: `
        <tile
            [template]="templateRef"
            [footerInfo]="tileInfo">
        </tile>
    `
})

export class FooterLandingComponent implements OnChanges {
    @Input() gearLanding: boolean;
    @Input() templateRef: TemplateRef<any>;

    private extended = 'Extended';
    private retracted = 'Retracted';
    private tileInfo: FooterDefinition;

    constructor(private sharedConstants: SharedConstants) {
        this.setInitialState();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['gearLanding']) {
            this.updateState();
        }
    }

    private setInitialState(): void {
        this.tileInfo = {
            image: this.sharedConstants.CARD_IMAGES.gearRetracted,
            value: this.retracted,
            legend: 'Current Landing'
        };
    }

    private updateState(): void {
        if (this.gearLanding) {
            this.tileInfo.value = this.extended;
            this.tileInfo.image = this.sharedConstants.CARD_IMAGES.gearExtended;
            return;
        }
        this.setInitialState();
    }
}