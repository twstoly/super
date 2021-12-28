import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Data(0,"","","")
  
  @Output() addQuote:any = new EventEmitter<Data>();


  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }
  resetForm(quoteForm: NgForm){
    quoteForm.reset()
  }
  

  ngOnInit(): void {
  }
  

}


