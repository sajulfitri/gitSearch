import { Component, OnInit} from '@angular/core';
import { SearchService } from './search.service';
import { TableModule } from 'primeng/table';
import { RoundedPipe } from './rounded.pipe';

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
  const query = event.target.value;
  const per_page = 100;
    const searchPromise = this.searchService.getSearchResult(query, per_page);
    searchPromise.subscribe(res => {
      console.log(res);
      this.result = res.items;
      this.totalCount = res.total_count;
      if (this.totalCount > 0) {
        this.showResult = true;
        this.noResult = false;
      } else {
        this.noResult = true;
        this.showResult = false;
        this.searchQuery = query;
      }
    });

  }

}
