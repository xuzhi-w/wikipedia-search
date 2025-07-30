import { Component,OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>();

  term = '';
  constructor(){}

  onInput(value: any){
    this.term = value;
  }
  // ngOnInit(){}

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
