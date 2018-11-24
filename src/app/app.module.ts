import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultPanelComponent } from './components/result-panel/result-panel.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { NasaService } from './services/nasa/nasa.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultPanelComponent,
    ItemsTableComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SearchEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
