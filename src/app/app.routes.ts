import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';

export const routes: Routes = [
    {
        path : '',
        loadComponent : () => import('./event/event.component').then(m=> m.EventComponent)
    }
];
