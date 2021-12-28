import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.css']
})
export class MainControlComponent implements OnInit {

  quotes:Data[] = [
    new Data(0,"Lamborghini","Mr. Ill do it later never owned a Lamborghini. Get that into your head and stay ahead of the game its your chance to take the game and run. When you stop working, you start to.", "Feruccio"),
    new Data(1,"welcomeLand","Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.I had to try something prove", "jstBooks.."),
    new Data(2,"Mwangale","I don't harp on the negative because if you do, then there's no progression. There's no froward movement. You got to always look on the bright side of things, and we are in control.."," Mwangale"),
    new Data(3,"jstBooks","When your dreams are bigger than the places you find yourself in, sometimes you need to seek out your own reminders that there is more. And there is always more waiting for you on ..", " Icy"),
    new Data(4,"Lamborghini","Mr. Ill do it later never owned a Lamborghini. Get that into your head and stay ahead of the game its your chance to take the game and run. When you stop working, you start to.", "Feruccio"),
    new Data(5,"welcomeLand","Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.I had to try something prove", "jstBooks.."),
    new Data(6,"Mwangale","I don't harp on the negative because if you do, then there's no progression. There's no froward movement. You got to always look on the bright side of things, and we are in control.."," Mwangale"),
    new Data(7,"jstBooks","When your dreams are bigger than the places you find yourself in, sometimes you need to seek out your own reminders that there is more. And there is always more waiting for you on ..", " Icy"),
  ]

  completeQuote(isComplete: any, index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewGoal(quote:any){
    let quotesLength = this.quotes.length;
    quote.id = quotesLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  
  ngOnInit(): void {
  }

}
