import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'tile-small',
    templateUrl: 'tile-small.component.html',
    styleUrls: ['./tile-small.component.scss']
})

export class TileSmallComponent {
    @Input() template: TemplateRef<any>;
    constructor() { }
}