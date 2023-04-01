import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewUserContentComponent } from './new-user-content/new-user-content.component';
import { HomeService } from './home.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TvCardComponent } from './tv-card/tv-card.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewUserContentComponent,
        MovieCardComponent,
        TvCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    providers: [HomeService]
})
export class HomeModule { }
