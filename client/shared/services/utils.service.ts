import { Injectable } from '@angular/core';

import { AltitudeNeedle, Needle } from '../models';

@Injectable()
export class UtilsService {

    constructor() { }

    calculateAverage(avg: number, current: number, counter: number): number {
        if (counter === 0) return current;
        return Math.round(((avg * (counter - 1)) + current) / counter);
    }

    calculateAltitude(currentAltitude: number, maxAltitude: number): AltitudeNeedle {
        let altitudeNeedle = new AltitudeNeedle();

        if (currentAltitude < 10) {
            return altitudeNeedle;
        }

        if (currentAltitude > this.getTimes10(altitudeNeedle.getMaxAllowedAltitude())) {
            altitudeNeedle.setMaxAltitude(maxAltitude);
            return altitudeNeedle;
        }

        this.calculateNeedle(altitudeNeedle, currentAltitude);
        return altitudeNeedle;
    }

    testIncomingObject(data: string, model: any): boolean {
        try {
            let modelProps = Object.keys(model);
            let dataProps = Object.keys(JSON.parse(data));
            let compare = new Set([ ...modelProps, ...dataProps ]);
            return modelProps.length === compare.size;
        }
        catch (error) {
            console.log('Invalid data', data);
        }
    }

    private calculateNeedle(altitude: AltitudeNeedle, next: number, idx: number = 0): void {
        let needle: Needle = altitude[altitude.getNextProp(idx)];
        if (needle) {
            ({ result: needle.value, next } = this.getAltitudeStruct(next, needle));
            this.calculateNeedle(altitude, next, idx + 1);
        }
    }

    private getAltitudeStruct(value: number, needle: Needle): any {
        let base10 = this.getTimes10(needle.base10);
        return ({
            result: this.getNeedleValue(needle.accurate, (value / base10)),
            next:  value % base10
        });
    }

    private getNeedleValue(accurate: any, result: number): number {
        return accurate ? result : Math.floor(result);
    }

    private getTimes10(value: number): number {
        return Math.pow(10, value);
    }
}