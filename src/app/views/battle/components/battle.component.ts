import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../home/home.reducers';
import { takeUntil } from 'rxjs/operators';
import { ResetAction } from '../../home/count.actions';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit, OnDestroy {

  counter: number;
  disposer: Subject<void> = new Subject();

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('count').pipe(takeUntil(this.disposer))
    .subscribe(counter => this.counter = counter);
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  reset(): void {
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
