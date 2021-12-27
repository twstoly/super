import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/Class/data';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()
  quote!: Data;
  @Output() iscomplete: any = new EventEmitter<boolean>();
  quoteComplete(complete: boolean){
    this.iscomplete.emit(complete)
  }

  ngOnInit(): void {
  }

}
