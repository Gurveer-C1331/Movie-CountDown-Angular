import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
