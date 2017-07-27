import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

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
    private eventHandler: Subject<number> = new Subject();

    constructor(private sharedConstants: SharedConstants) {
        this.setInitialState();
    }

    setInitialState(): void {
        this.setTileInfo();
        this.setEventHandler();
    }

    flapChange(position: number): void {
        this.eventHandler.next(position);
    }

    private setTileInfo(): void {
        this.tileInfo = {
            image: this.sharedConstants.CARD_IMAGES.flaps,
            title: 'Flaps',
            legend: 'Current',
            value: this.flapPosition
        };
    }

    private setEventHandler(): void {
        this.eventHandler
            .subscribe((pos: number) => this.onFlapChange.emit(pos));
    }
}