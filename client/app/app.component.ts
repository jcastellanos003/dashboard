import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-app',
    styles: [`
    .container {
        min-height: 100%;
        background: #fdd156;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-item--header {
        align-self: flex-start;
        flex: 1;
        width: 100%;
    }
    .container-item--router {
        flex: 1;
        width: 100%;
        max-width: 900px;
    }
    `],
    template: `
        <div class="container">
            <div class="container-item--header">
                Header
            </div>
            <div class="container-item--router">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class DashboardApp {
    constructor() {
    }
}
