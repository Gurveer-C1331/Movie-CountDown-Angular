import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverService } from './discover.service';
import { DiscoverComponent } from './discover.component';
import { SharedModule } from '../shared/shared.module';
import { DiscoverCardComponent } from './discover-card/discover-card.component';

@NgModule({
    declarations: [
        DiscoverComponent,
        DiscoverCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DiscoverRoutingModule,
        NgxPaginationModule,
        FontAwesomeModule
    ],
    exports: [
        DiscoverCardComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [DiscoverService]
})
export class DiscoverModule { }
