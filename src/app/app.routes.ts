import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./module/dashboard/dashbord.routes').then(r => r.dashboardRouter)
    },
    
];
