import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private store: Store<AppState>) { }

  getCurrentValue() {
    return this.store.select( appState => appState.counter.countValue)
          .pipe(filter(Boolean))
  }
}
