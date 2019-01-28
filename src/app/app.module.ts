import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatRippleModule,
        MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule,
        MatIconModule, MatListModule, MatTabsModule, MatProgressSpinnerModule,
        MatExpansionModule, MatDividerModule, MatSlideToggleModule,
        MatSelectModule, MatCardModule, MatChipsModule, MatSnackBarModule } from '@angular/material';

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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AgmCoreModule } from '@agm/core';
import { RateComponent } from './rate/rate.component';

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
    LoginComponent,
    SignupComponent,
    RateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDialogModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGFR_QROaowfPeRNAh2XxOt57VROax5Uk',
      language: 'en-US'
    })
  ],
  entryComponents: [
    RateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
