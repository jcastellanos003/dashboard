export interface GaugeUIConfig {
    units: string;
    title: string;
    minValue: number;
    maxValue: number;
    majorTicks: number[];
    highlights: string;
    valueBox: boolean;
    colorNumbers: string;
    colorMajorTicks: string;
    colorMinorTicks: string;
    colorPlate: string;
    colorPlateEnd: string;
    needle: boolean;
    needleEnd: number;
    needleType: string;
}