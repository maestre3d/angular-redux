import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './components/count.component';

const routes: Routes = [
  {
    path: '',
    component: CountComponent,
    children: [
      {
        path: 'battle',
        loadChildren: () => import('../battle/battle.module').then(module => module.BattleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountRoutingModule { }
