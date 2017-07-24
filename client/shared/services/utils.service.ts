import { Injectable } from '@angular/core';

import { Altitude } from '../models';

@Injectable()
export class UtilsService {
    constructor() { }

    calculateAverage(avg: number, current: number, counter: number): number {
        if (counter === 0) return current;
        return Math.round(((avg * (counter - 1)) + current) / counter);
    }

    calculateAltitude(value: number): Altitude {
        let altitude: Altitude = {
            thousands: 0,
            hundreds: value / 100
        };
        if (value < 999) return altitude;

        altitude.thousands = Math.floor(value / 1000);
        altitude.hundreds = ((value / 1000) - altitude.thousands) * 10;
        return altitude;
    }
}