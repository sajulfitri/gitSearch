import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: any;
  totalCount: any;
  result: any;
  showResult: boolean = false;
  noResult: boolean = false;
  searchQuery: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  searchGitRepo(event) {
    console.log(event);

    const searchPromise = this.searchService.getSearchResult(event.target.value, 1, 100);
    searchPromise.subscribe(res => {
      console.log(res);
      this.result = res.items;
      this.totalCount = res.total_count;
      if (this.totalCount > 0) {
        this.showResult = true;
      } else {
        this.noResult = true;
        this.searchQuery = event.target.value;
      }
    });

  }

}
