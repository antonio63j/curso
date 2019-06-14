import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {PanelMenuModule} from 'primeng/panelmenu';

import { PrimengPanelmenuRoutingModule } from './primeng-panelmenu-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengPanelmenuRoutingModule,
    RouterModule,
    PanelMenuModule
  ],
  declarations: [MenuComponent]
})
export class PrimengPanelmenuModule { }
