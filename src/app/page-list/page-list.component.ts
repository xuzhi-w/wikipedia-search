import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-list',
  imports: [CommonModule],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages:Page[] = [];
}

interface Page{
 pageid: number;
  title: string,
  wordcount: number,
  snippet: string
}