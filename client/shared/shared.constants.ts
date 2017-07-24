import { FooterDefinition } from './models';

export class SharedConstants {
    public CARD_IMAGES = {
        speed: '../../assets/images/speed.svg',
        altitude: '../../assets/images/altitude.svg',
        gearRetracted: '../../assets/images/rim.svg',
        gearExtended: '../../assets/images/rim_green.svg',
        flaps: '../../assets/images/flaps.svg'
    };
    public EXTENDED = 'Extended';
    public RETRACTED = 'Retracted';
    public GearLandingInfo: FooterDefinition = {
        image: this.CARD_IMAGES.gearRetracted,
        value: this.RETRACTED,
        legend: 'Current Landing'
    };
}