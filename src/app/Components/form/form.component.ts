import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Data(0,"","",new Date())
  
  @Output() addQuote:any = new EventEmitter<Data>();

  submitQuote(){
    // var quoteLength = this.newQuote.length + 1;
    this.addQuote.emit(this.newQuote)
  }

  ngOnInit(): void {
  }

}
