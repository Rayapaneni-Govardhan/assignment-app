import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [DynamicDivsComponent],
  imports: [CommonModule, DynamicDivsRoutingModule, InfiniteScrollModule],
})
export class DynamicDivsModule {}
