import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule, MatCheckboxModule, MatToolbarModule,
        MatFormFieldModule, MatInputModule, MatButtonModule,
        MatIconModule, MatListModule, MatTabsModule, MatExpansionModule, 
        MatDividerModule, MatSlideToggleModule, MatSelectModule,
        MatCardModule, MatChipsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RankComponent } from './rank/rank.component';
import { StoreComponent } from './store/store.component';
import { HistoryComponent } from './history/history.component';
import { MapComponent } from './map/map.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    RankComponent,
    StoreComponent,
    HistoryComponent,
    MapComponent,
    AccountComponent,
    ProfileComponent,
    SettingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGFR_QROaowfPeRNAh2XxOt57VROax5Uk',
      language: 'en-US'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
