import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '@app/map/map.component';
import { RankComponent } from '@app/rank/rank.component';
import { StoreComponent } from '@app/store/store.component';
import { HistoryComponent } from '@app/history/history.component';
import { AccountComponent } from '@app/account/account.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { SettingComponent } from '@app/setting/setting.component';

const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'rank', component: RankComponent},
  {path: 'store', component: StoreComponent},
  {path: 'account', component: AccountComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
