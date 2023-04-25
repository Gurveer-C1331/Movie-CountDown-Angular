import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { path: 'discover',
        loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule)
    },
    { path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
