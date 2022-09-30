import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewUserContentComponent } from './new-user-content/new-user-content.component';
import { CountDownCardComponent } from './count-down-card/count-down-card.component';
import { HomeService } from './home.service';

@NgModule({
    declarations: [
        HomeComponent,
        NewUserContentComponent,
        CountDownCardComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    providers: [HomeService]
})
export class HomeModule { }
