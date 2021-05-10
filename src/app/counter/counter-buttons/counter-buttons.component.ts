import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  //Importing the store and counter here is the type of obejct we are getting
  constructor(private store:Store<{counter:CounterState}>) { }
  // constructor(private store:Store<{counter:{counter:number}}>) { }
  
  ngOnInit(): void {
  }
  onIncrement(){

    //this will go to the increment action which we have in our actions folder
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}


