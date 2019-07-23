import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as countActions from '../count.actions';
import { AppState } from '../home.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  counter: number;

  // Disposer
  disposer: Subject<void> = new Subject();

  constructor( private store: Store<AppState> ) {
    this.store.select('count').pipe(takeUntil(this.disposer))
    .subscribe(state => {
      this.counter = state;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.disposer.next();
    this.disposer.complete();
  }

  increaseCount(): void {
    const action = new countActions.IncrementAction();
    this.store.dispatch(action);

  }

  decreaseCount(): void {
    const action = new countActions.DecrementAction();
    this.store.dispatch(action);
  }

}
