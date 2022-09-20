import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewUserContentComponent } from './new-user-content/new-user-content.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewUserContentComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
