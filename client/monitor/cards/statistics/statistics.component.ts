import { Component, Input } from '@angular/core';


@Component({
    selector: 'statistics',
    templateUrl: 'statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {
    @Input() speed: number;
    @Input() altitude: number;
    constructor() { }
}
