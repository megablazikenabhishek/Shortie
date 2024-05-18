import { Routes } from '@angular/router';
import { RedirectComponent } from './components/redirect/redirect.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: ":id", component: RedirectComponent}
];
