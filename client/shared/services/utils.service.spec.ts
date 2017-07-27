import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { DashboardModel } from '../models';

describe('UtilsService', () => {
    const messages = [
        {control: {landing_gear: 0, flaps: 3}, telemetry: {altitude: 4390, airspeed: 208}},
        {control: {landing_gear: 0, flaps: 3}, telemetry: {altitude: 410, airspeed: 145}},
        {control: {landing_gear: 0, flaps: 0}, telemetry: {altitude: 18499, airspeed: 321}},
        {control: {landing_gear: 0, flaps: 2}, telemetry: {altitude: 32500, airspeed: 213}},
        {control: {landing_gear: 0, flaps: 2}, telemetry: {altitude: 40165, airspeed: 213}},
    ];
    const invalidFormat = {
        ctrl: {landing_gear: 0, flaps: 3}, tlmtry: {altitude: 24390, airspeed: 208}
    };
    let utils: UtilsService;

    beforeEach(() => {
        utils = new UtilsService();
    });

    it('should have an instance of utils service', () => {
        expect(utils).toBeDefined();
    });

    it('test incoming invalid message', () => {
        let test = utils.testIncomingObject('Hello world', new DashboardModel());
        expect(test).toBeUndefined();
    });

    it('test incoming valid message', () => {
        let test = utils.testIncomingObject(JSON.stringify(messages[0]), new DashboardModel());
        expect(test).toBeTruthy();
    });

    it('test incoming message with a invalid format', () => {
        let test = utils.testIncomingObject(JSON.stringify(invalidFormat), new DashboardModel());
        expect(test).toBeFalsy();
    });

    it('calculate altitud only for middle and big needle', () => {
        let needles = utils.calculateAltitude(4390, 10);
        expect(needles.short.value).toEqual(0);
        expect(needles.middle.value).toEqual(4);
        expect(needles.big.value).toEqual(3.9);
    });

    it('calculate altitud only for big needle', () => {
        let needles = utils.calculateAltitude(410, 10);
        expect(needles.short.value).toEqual(0);
        expect(needles.middle.value).toEqual(0);
        expect(needles.big.value).toEqual(4.1);
    });

    it('calculate altitud for all needles', () => {
        let needles = utils.calculateAltitude(18499, 10);
        expect(needles.short.value).toEqual(1);
        expect(needles.middle.value).toEqual(8);
        expect(needles.big.value).toEqual(4.99);
    });

    it('calculate altitud for all needles and middle in zero', () => {
        let needles = utils.calculateAltitude(40165, 10);
        expect(needles.short.value).toEqual(4);
        expect(needles.middle.value).toEqual(0);
        expect(needles.big.value).toEqual(1.65);
    });

    it('calculate altitud for all needles and big rounded', () => {
        let needles = utils.calculateAltitude(32500, 10);
        expect(needles.short.value).toEqual(3);
        expect(needles.middle.value).toEqual(2);
        expect(needles.big.value).toEqual(5);
    });

    it('calculate alverage of speed', () => {
        let currentAvg = utils.calculateAverage(200, 210, 1);
        expect(currentAvg).toEqual(210);
        currentAvg = utils.calculateAverage(currentAvg, 240, 2);
        expect(currentAvg).toEqual(225);
        currentAvg = utils.calculateAverage(currentAvg, 345, 3);
        expect(currentAvg).toEqual(265);
        currentAvg = utils.calculateAverage(currentAvg, 12, 4);
        expect(currentAvg).toEqual(202);
        currentAvg = utils.calculateAverage(currentAvg, 26, 4);
        expect(currentAvg).toEqual(158);
    });

    it('calculate alverage of altitude', () => {
        let currentAvg = utils.calculateAverage(18345, 15623, 1);
        expect(currentAvg).toEqual(15623);
        currentAvg = utils.calculateAverage(currentAvg, 11652, 2);
        expect(currentAvg).toEqual(13638);
        currentAvg = utils.calculateAverage(currentAvg, 36012, 3);
        expect(currentAvg).toEqual(21096);
        currentAvg = utils.calculateAverage(currentAvg, 4056, 4);
        expect(currentAvg).toEqual(16836);
        currentAvg = utils.calculateAverage(currentAvg, 717, 4);
        expect(currentAvg).toEqual(12806);
    });
});