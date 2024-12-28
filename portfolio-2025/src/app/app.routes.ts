import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
