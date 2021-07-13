import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksComponent } from "./books.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { BooksRoutingModule } from "./books-routing.module";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [BooksComponent],
    imports: [
        CommonModule,
        BooksRoutingModule,
        MatExpansionModule,
        MatPaginatorModule
    ]
})

export class BooksModule { }