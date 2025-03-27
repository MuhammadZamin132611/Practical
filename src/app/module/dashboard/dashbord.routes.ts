import { Routes } from "@angular/router";

export const dashboardRouter: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: 'add-employee',
                loadComponent: () => import('./dashboard/add-employee/add-employee.component').then(m => m.AddEmployeeComponent)
            },
            {
                path: 'view-employee',
                loadComponent: () => import('./dashboard/view-employee/view-employee.component').then(m => m.ViewEmployeeComponent)
            },
            {
                path: 'update/:id',
                loadComponent: () => import('./dashboard/update-employee/update-employee.component').then(m => m.UpdateEmployeeComponent)
            },
            {
                path: '',
                redirectTo: 'view-employee',
                pathMatch: 'full'
            }
        ]
    }
];