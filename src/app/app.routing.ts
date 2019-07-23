import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(module => module.HomeModule)
    },
    {
        path: '404',
        loadChildren: () => import('./views/shared/not-found/not-found.module').then(module => module.NotFoundModule)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(ROUTES, {useHash: true});
