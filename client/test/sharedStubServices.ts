import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { AltitudeNeedle, Needle, GaugeUIConfig } from '../shared/models';

export class MonitorWsServiceStub {
    sendControlMessage(controlMessage: any): void {
    }

    getData(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(JSON.stringify(
                {
                    control: {landing_gear: 0, flaps: 3}, telemetry: {altitude: 58390, airspeed: 208}
                }
            ));
        });
    }
}

export class UtilsServiceStub {
    calculateAverage(avg: number, current: number, counter: number): number {
        return 225 + counter;
    }
    calculateAltitude(currentAltitude: number, maxAltitude: number): AltitudeNeedle {
        let altitudeNeedle = new AltitudeNeedle();
        altitudeNeedle.big = <Needle>{ value: 1 };
        altitudeNeedle.middle = <Needle>{ value: 2 };
        altitudeNeedle.short = <Needle>{ value: 5 };
        return altitudeNeedle;
    }
    testIncomingObject(data: string, model: any): boolean {
        return false;
    }
}