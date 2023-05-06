import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CollectionService } from './collection.service';

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
    providers: [CollectionService]
})

export class SharedModule { }
