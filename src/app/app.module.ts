import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultPanelComponent } from './components/result-panel/result-panel.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultPanelComponent,
    ItemsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
