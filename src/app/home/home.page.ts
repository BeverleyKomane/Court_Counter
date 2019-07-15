import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  score1=0;
  score2=0;

  constructor() {}
  private decrement1 () {
    this.score1 -=1;
    if(this.score1<=0)
    this.score1=0
  }
  private increment1() {
    this.score1 +=1;
  }
  private decrement2 () {
  this.score1 -=2;
  if (this.score1<=0)
  this.score1=0;
}
  private increment2 () {
  this.score1 +=2;
}
private decrement3 () {
  this.score1 -=3;
  if (this.score1<=0)
  this.score1=0;
}
  private increment3 () {
  this.score1 +=3;
}

private decrement1B(){
this.score2-=1;
if(this.score2<=0)
    this.score2=0;
}
private increment1B() {
  this.score2+=1;
}
private decrement2B () {
  this.score2 -=2;
  if(this.score2<=0)
    this.score2=0;
}
  private increment2B () {
  this.score2 +=2;
}
private decrement3B () {
  this.score2 -=3;
  if(this.score2<=0)
    this.score2=0;
}
  private increment3B () {
  this.score2 +=3;
}
reset(){
  this.score1=0;
  this.score2=0;
  
}
}