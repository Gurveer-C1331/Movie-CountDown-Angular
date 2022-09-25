import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewUserContentComponent } from './new-user-content/new-user-content.component';
import { CountDownCardComponent } from './count-down-card/count-down-card.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewUserContentComponent,
        CountDownCardComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
