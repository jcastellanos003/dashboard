import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FooterDefinition } from '../../../shared/models';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['./switch.component.scss']
})

export class SwitchComponent implements OnInit {
    @Input() tileInfo: FooterDefinition;
    @Output() onToggleSwitch = new EventEmitter<FooterDefinition>();

    private cardInfo: FooterDefinition;
    private gearLanding: boolean = false;
    private uriImg: string = 'assets/images/';

    constructor(private sharedConstants: SharedConstants) {
    }

    ngOnInit(): void {
        this.cardInfo = JSON.parse(JSON.stringify(this.tileInfo));
    }

    onToggleGearLanding(): void {
        this.updateState();
        this.onToggleSwitch.emit(this.cardInfo);
    }

    get switchImage(): string {
        return this.gearLanding ? `${this.uriImg}switch_on.svg` : `${this.uriImg}switch_off.svg`;
    }

    private updateState(): void {
        this.gearLanding = !this.gearLanding;
        if (this.gearLanding) {
            this.cardInfo.value = this.sharedConstants.EXTENDED;
            this.cardInfo.image = this.sharedConstants.CARD_IMAGES.gearExtended;
            return;
        }
        this.cardInfo.value = this.sharedConstants.RETRACTED;
        this.cardInfo.image = this.sharedConstants.CARD_IMAGES.gearRetracted;
    }
}