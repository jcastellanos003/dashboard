import { Component, Input } from '@angular/core';

import { GaugeUIConfig } from '../../models';

@Component({
    selector: 'gauge',
    templateUrl: 'gauge.component.html'
})

export class GaugeComponent {
    @Input() config: GaugeUIConfig;
    @Input() value: number;
}