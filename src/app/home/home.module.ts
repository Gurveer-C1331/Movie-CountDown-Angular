import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewUserContentComponent } from './new-user-content/new-user-content.component';
import { HomeService } from './home.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TvCardComponent } from './tv-card/tv-card.component';
import { FilterCardsPipe } from './filter-cards.pipe';

@NgModule({
    declarations: [
        HomeComponent,
        NewUserContentComponent,
        MovieCardComponent,
        TvCardComponent,
        FilterCardsPipe
    ],
    imports: [
        CommonModule,
        SharedModule,
        NgxPaginationModule,
        HomeRoutingModule,
        FontAwesomeModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [HomeService]
})
export class HomeModule { }
