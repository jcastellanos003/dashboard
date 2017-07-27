export class DashboardModel<C, T> {
    public control: C = <any>{};
    public telemetry: T =  <any>{};
}

export interface ControlMessage {
    flaps: number;
    landing_gear: number;
}

export interface Telemetry {
    airspeed: number;
    altitude: number;
}