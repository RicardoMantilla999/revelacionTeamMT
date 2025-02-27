import { Routes } from '@angular/router';
import { HomesComponent } from './pages/homes/homes.component';
import { VotacionComponent } from './pages/votacion/votacion.component';
import { ContadorComponent } from './pages/contador/contador.component';

export const routes: Routes = [

    { path: '', component: HomesComponent },
    { path: 'votacion', component: VotacionComponent },
    { path: 'contador', component: ContadorComponent },
    { path: '**', redirectTo: '' }
];
