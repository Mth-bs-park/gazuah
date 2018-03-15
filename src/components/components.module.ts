import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { ThumbnailComponent } from './thumbnail/thumbnail';
import { SalesItemComponent } from './sales-item/sales-item';

@NgModule({
	declarations: [
	  ThumbnailComponent,
    SalesItemComponent
  ],
	imports: [IonicModule],
	exports: [
	  ThumbnailComponent,
    SalesItemComponent
  ]
})
export class ComponentsModule {}
