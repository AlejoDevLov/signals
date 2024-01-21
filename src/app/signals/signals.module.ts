import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { LayoutSignalsComponent } from './layout/layout-signals/layout-signals.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    LayoutSignalsComponent,
    PropertiesPageComponent,
    UserInfoPageComponent,
    CounterPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ],
})
export class SignalsModule { }
