import { Component, Input, TemplateRef } from '@angular/core';

import { FooterDefinition } from '../../models';

@Component({
    selector: 'tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['./tile.component.scss']
})

export class TileComponent {
    @Input() template: TemplateRef<any>;
    @Input() footerInfo: FooterDefinition;
    constructor() { }
}