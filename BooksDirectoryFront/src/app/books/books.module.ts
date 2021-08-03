import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksComponent } from "./books.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { BooksRoutingModule } from "./books-routing.module";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'; 
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    declarations: [BooksComponent],
    imports: [
        CommonModule,
        BooksRoutingModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule
    ]
})

export class BooksModule { }