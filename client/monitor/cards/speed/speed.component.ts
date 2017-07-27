import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FooterDefinition, GaugeUIConfig } from '../../../shared/models';
import { UtilsService } from '../../../shared/services';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'speed',
    templateUrl: 'speed.component.html',
    styleUrls: ['./speed.component.scss']
})

export class SpeedComponent implements OnChanges {
    @Input() currentSpeed: number;

    private counter: number = 0;
    private tileInfo: FooterDefinition;
    private gaugeConfig: GaugeUIConfig;

    constructor(private sharedConstants: SharedConstants, private utilsService: UtilsService) {
        this.setInitialState();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['currentSpeed']) {
            this.updateState();
        }
    }

    private setInitialState(): void {
        this.setTileInfo();
        this.setGaugeUIInstance();
    }

    private updateState(): void {
        if (this.currentSpeed > 0) {
            this.tileInfo.value = this.utilsService.calculateAverage(
                this.tileInfo.value,
                this.currentSpeed,
                this.counter
            );
            this.counter++;
        }
    }

    private setTileInfo(): void {
        this.tileInfo = {
            image: this.sharedConstants.CARD_IMAGES.speed,
            value: 0,
            title: 'Knots',
            legend: 'Average'
        };
    }

    private setGaugeUIInstance(): void {
        this.gaugeConfig = {
            colorMajorTicks: '#fff',
            colorMinorTicks: '#fff',
            colorNumbers: '#2a2424',
            colorPlate: '#EDEDED',
            colorPlateEnd: '#EDEDED',
            highlights:
                /**
                 * aint used template syntax cause radial gauge
                 * is a third party component and doesn't works
                 */
                '[{ "from": 0, "to": 200, "color": "#39B099" },' +
                '{ "from": 200, "to": 280, "color": "#EEC85F" },' +
                '{ "from": 280, "to": 360, "color": "#F7B356" },' +
                '{ "from": 360, "to": 420, "color": "#f44336" }]',
            majorTicks: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 420],
            maxValue: 420,
            minValue: 0,
            needleType: 'arrow',
            title: 'Airspeed',
            units: 'Knots',
            needle: true,
            needleEnd: 80,
            valueBox: true
        };
    }
}
