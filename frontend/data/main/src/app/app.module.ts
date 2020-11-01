import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderModule } from './shared/components/layout-header/layout-header.module';
import { LayoutFooterModule } from './shared/components/layout-footer/layout-footer.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './shared/services/services.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupCatalogItemComponent } from './modules/catalog/components/popup-catalog-item/popup-catalog-item.component';
import { PopupDefaultModule } from './shared/components/popup-default/popup-default.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopupCatalogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    OverlayModule,
    LayoutHeaderModule,
    LayoutFooterModule,
    PopupDefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
