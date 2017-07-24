import { Component, Input } from '@angular/core';

import { FooterDefinition } from '../../models';

@Component({
    selector: 'tile-footer',
    templateUrl: 'tile-footer.component.html',
    styleUrls: ['./tile-footer.component.scss']
})

export class TileFooterComponent {
    @Input() info: FooterDefinition;
    constructor() { }
}