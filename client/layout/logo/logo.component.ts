import { Component } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div class="logo__container">
            <img class="logo__img"
                 src="assets/images/helicopter.svg">
        </div>
    `,
    styleUrls: ['./logo.component.scss']
})

export class LogoComponent {
    constructor() { }
}