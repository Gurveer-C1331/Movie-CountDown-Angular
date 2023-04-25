import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'website';

  /** icons. */
  public faClear = faXmark;
  public faSearch = faMagnifyingGlass;

  /** search string entered by the user. */
  public searchString = { q : ''};

  constructor(public router: Router) { }

  /**
   * Route user to the Search results page and reset searchString.
   */
  public onSearch(): void {

    if (this.searchString.q) {
       this.router.navigate(
        ['/search'],
        { queryParams: this.searchString });

        this.searchString.q = '';
    }
  }
}
