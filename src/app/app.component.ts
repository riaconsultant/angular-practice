import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, of, switchMap } from 'rxjs';
import { decrement, increment, reset } from './counter.action';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-practice';
  count$: Observable<Number>;

  constructor(private store: Store<{count: Number}>, private data: DataService) {
    this.count$ = this.store.select('count');
  }

  ngOnInit() {
    this.data.getUser().pipe(
      filter((res: any) => res.id === 1),
      switchMap((res: any) => {
        return this.data.getTask();
      })
      ).subscribe(da => {
      console.log('task', da);
    });
    // this.data.getUser().pipe(
    //   switchMap((res: any) => {
    //     if (res.id === 1) {
    //       return this.data.getTask()
    //     }
    //     return  of('not found')
    //   })
    // ).subscribe((d: any)=> {
    //   console.log('d',d);
    // })
    // this.data.getUser().subscribe((res: any) => {
    //   if (res.id === 1) {
    //     this.data.getTask().subscribe((da: any)=> {
    //       console.log('task', da);
    //     })
    //   }
    // })
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  ngOnDestroy() {

  }
}
