import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter:number=0;
  constructor(private store:Store<{counter:CounterState}>) { }
  // constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(data=>{
    //   console.log("Counter obserable is called here")
    //   this.counter=data.counter;
    this.store.select(getCounter).subscribe(counter=>{
      console.log("Counter obserable is called here")
      this.counter=counter;
    })
 

} 
}
