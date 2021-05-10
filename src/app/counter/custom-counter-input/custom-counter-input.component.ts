import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number | any;
  channelName:string | any;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(data=>{
    //   console.log("Channel Name Obserable is called")
    //   this.channelName=data.channelName
      this.store.select(getChannelName).subscribe(channelName=>{
        console.log("Channel obserable is called here")
        this.channelName=channelName;
      })
  }
  onAdd(){
    // console.log(this.value)
    this.store.dispatch(customIncrement({value:+this.value}))
  }

  onChangeChannelText(){
    this.store.dispatch(changeChannelName())
  }
}
