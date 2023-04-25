import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { DiscoverModule } from '../discover/discover.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    DiscoverModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SearchService]
})
export class SearchModule { }
