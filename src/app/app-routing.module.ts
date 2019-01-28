import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '@app/map/map.component';
import { RankComponent } from '@app/rank/rank.component';
import { StoreComponent } from '@app/store/store.component';
import { HistoryComponent } from '@app/history/history.component';
import { AccountComponent } from '@app/account/account.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { SettingComponent } from '@app/setting/setting.component';
import { LoginComponent } from '@app/login/login.component';
import { SignupComponent } from '@app/signup/signup.component';
import { AuthGuard } from '@app/guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'map', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'rank', component: RankComponent, canActivate: [AuthGuard]},
  {path: 'store', component: StoreComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
  {path: 'setting', component: SettingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
