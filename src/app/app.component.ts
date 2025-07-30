import { Component , Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';

@Injectable({providedIn: 'root'})
export class Car{
  color = 'red';
}

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService,private car : Car){}

  onTerm(term: string){
    this.wikipedia.search(term).subscribe((response:any)=>{
      this.pages = response.query.search;
    });
  }
  
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

}
