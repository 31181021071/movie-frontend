import { Component, OnInit } from '@angular/core';
import { MovieManagementService } from 'src/app/services/admin-page/movie-management.service';

@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrls: ['./movie-management.component.css']
})
export class MovieManagementComponent implements OnInit {

  searchCondition = {
    movieName: "",
    country: [],
    releaseYear: [],
    ratingFrom: 0,
    ratingTo: 0
  }

  size = 30
  totalMovieSearch = 0;

  movieList = []
  listCountry = []
  listReleaseYear = [{label: '', value: ''}]

  constructor(
    private movieManagementService: MovieManagementService
  ) { }

  ngOnInit(): void {
    this.movieManagementService.getInit().subscribe(
      response => {
        this.listCountry = response.body.listCountry
        this.listReleaseYear = this.generateReleaseYearArray();
      }
    )
  }

  generateReleaseYearArray() {
    const startYear = 1895;
    const currentYear = new Date().getFullYear(); // Get the current year
    const endYear = currentYear + 5; // Extend to 5 years in the future

    // Generate the array of years from startYear to endYear
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({label: year.toString(), value: year.toString()});
    }
    return years;
  }

  onClear() {
    this.searchCondition = {
      movieName: "",
      country: [],
      releaseYear: [],
      ratingFrom: 0,
      ratingTo: 0
    }
  }

  onChangePage(event: any) {
    let param = {
      // name: this.searchCondition.name,
      // email: this.searchCondition.email,
      // page: event.page,
      // size: event.rows
    }
    this.search(param);
  }

  onSearch() {
    console.log(this.searchCondition)
    let param = {
      // name: this.searchCondition.name,
      // email: this.searchCondition.email,
      // page: 0,
      // size: this.size
    }
    this.search(param);
  }

  search(param: any) {
    
  }

}
