export interface Needle {
    base10: number;
    value: number;
    accurate?: boolean;
}

export class AltitudeNeedle {
    short:  Needle = { base10: 4, value: 0 };
    middle: Needle = { base10: 3, value: 0 };
    big:    Needle = { base10: 2, value: 0, accurate: true };

    setMaxAltitude(maxAltitude: number): void {
        this.short.value = maxAltitude;
        this.middle.value = maxAltitude;
        this.big.value = maxAltitude;
    }

    getMaxAllowedAltitude(): number {
        return this.short.base10 + 1;
    }

    getNextProp(idx: number): string {
        return ['short', 'middle', 'big'][idx];
    }
}