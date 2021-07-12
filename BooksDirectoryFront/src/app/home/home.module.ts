import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatExpansionModule
  ],
})

export class HomeModule { }