import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { HomeComponent } from './components/home.component';
import { CountComponent } from '../count/components/count.component';
import { BattleComponent } from '../battle/components/battle.component';
import { counterReducer } from './count.reducer';


@NgModule({
  declarations: [
    HomeComponent,
    CountComponent,
    BattleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class HomeModule { }
