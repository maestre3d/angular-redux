import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MultiplyAction, DivideAction } from '../../home/count.actions';
import { AppState } from '../../home/home.reducers';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit, OnDestroy {

  counter: number;
  disposer: Subject<void> = new Subject();

  constructor( private store: Store<AppState> ) {
    this.store.select('count').pipe(takeUntil(this.disposer))
    .subscribe(count => this.counter = count);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  multiply(): void {
    const action = new MultiplyAction(5);
    this.store.dispatch(action);
  }

  divide(): void {
    const action = new DivideAction(2);
    this.store.dispatch(action);
  }

}
