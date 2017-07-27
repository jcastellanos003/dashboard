import { Observable } from 'rxjs/Observable';

export interface MonitorService {
    sendControlMessage(controlMessage: any): void;
    getData(): Observable<any>;
}
