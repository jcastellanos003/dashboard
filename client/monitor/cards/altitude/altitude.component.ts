import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FooterDefinition, GaugeUIConfig, Altitude } from '../../../shared/models';
import { UtilsService } from '../../../shared/services';
import { SharedConstants } from '../../../shared/shared.constants';

@Component({
    selector: 'altitude',
    templateUrl: 'altitude.component.html',
    styleUrls: ['./altitude.component.scss']
})

export class AltitudeComponent implements OnChanges {
    @Input() currentAltitude: number;

    private counter: number = 0;
    private altitude: Altitude;
    private tileInfo: FooterDefinition;
    private gaugeConfig: GaugeUIConfig;
    private gaugeConfigNeedle: GaugeUIConfig;
    private gaugeConfigBox: GaugeUIConfig;

    constructor(private sharedConstants: SharedConstants, private utilsService: UtilsService) {
        this.setInitialState();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['currentAltitude']) {
            this.updateState();
        }
    }

    private setInitialState(): void {
        this.setTileInfo();
        this.setGaugeUIInstance();
    }

    private updateState(): void {
        this.altitude = this.utilsService.calculateAltitude(this.currentAltitude);
        this.tileInfo.value = this.utilsService.calculateAverage(
            this.tileInfo.value,
            this.currentAltitude,
            this.counter
        );
        this.counter++;
    }

    private setTileInfo(): void {
        this.tileInfo = {
            image: this.sharedConstants.CARD_IMAGES.altitude,
            value: 0,
            title: 'Feet',
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
            highlights: '[{ "from": 0, "to": 10, "color": "#C8C8C8" }]',
            majorTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            maxValue: 10,
            minValue: 0,
            needleType: 'arrow',
            title: 'Altitude',
            units: 'Feet',
            needle: true,
            needleEnd: 80,
            valueBox: false
        };
        this.gaugeConfigNeedle = {
            colorMajorTicks: 'transparent',
            colorMinorTicks: 'transparent',
            colorNumbers: 'transparent',
            colorPlate: 'transparent',
            colorPlateEnd: 'transparent',
            highlights: '',
            majorTicks: [],
            maxValue: 10,
            minValue: 0,
            needleType: 'arrow',
            title: '',
            units: '',
            needle: true,
            needleEnd: 50,
            valueBox: false
        };
        this.gaugeConfigBox = Object.assign({}, this.gaugeConfigNeedle, {
            needle: false,
            maxValue: 11000,
            valueBox: true
        });
    }
}