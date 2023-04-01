import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookieService } from './cookie.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoaderComponent
    ],
    providers: [CookieService]
})

export class SharedModule { }
