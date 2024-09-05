import { Component, OnInit } from '@angular/core';
import { MovieManagementService } from 'src/app/services/admin-page/movie-management.service';
import { SharedDialogService } from 'src/app/services/common/dialog.service';
import { MovieManagementDetailComponent } from './movie-management-detail/movie-management-detail.component';

@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrls: ['./movie-management.component.css'],
})
export class MovieManagementComponent implements OnInit {
  searchCondition = {
    movieName: '',
    country: [],
    releaseYear: [],
    ratingFrom: 0,
    ratingTo: 0,
  };

  size = 30;
  totalMovieSearch = 10;

  movieList = [
    {
      id: 1,
      movieName: 'Inception',
      country: 'USA',
      releaseYear: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      movieName: 'Parasite',
      country: 'South Korea',
      releaseYear: 2019,
      rating: 8.6,
    },
    {
      id: 3,
      movieName: 'The Shawshank Redemption',
      country: 'USA',
      releaseYear: 1994,
      rating: 9.3,
    },
    {
      id: 4,
      movieName: 'Spirited Away',
      country: 'Japan',
      releaseYear: 2001,
      rating: 8.6,
    },
    {
      id: 5,
      movieName: 'Amélie',
      country: 'France',
      releaseYear: 2001,
      rating: 8.3,
    },
  ];
  listCountry = [];
  listReleaseYear = [{ label: '', value: '' }];

  constructor(
    private movieManagementService: MovieManagementService,
    private dialogService: SharedDialogService
  ) {}

  ngOnInit(): void {
    this.listReleaseYear = this.generateReleaseYearArray();
    this.movieManagementService.getInit().subscribe((response) => {
      this.listCountry = response.body.listCountry;
    });
  }

  generateReleaseYearArray() {
    const startYear = 1895;
    const currentYear = new Date().getFullYear(); // Get the current year
    const endYear = currentYear + 5; // Extend to 5 years in the future

    // Generate the array of years from startYear to endYear
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({ label: year.toString(), value: year.toString() });
    }
    return years;
  }

  onClear() {
    this.searchCondition = {
      movieName: '',
      country: [],
      releaseYear: [],
      ratingFrom: 0,
      ratingTo: 0,
    };
  }

  onChangePage(event: any) {
    let param = {
      // name: this.searchCondition.name,
      // email: this.searchCondition.email,
      // page: event.page,
      // size: event.rows
    };
    this.search(param);
  }

  onSearch() {
    console.log(this.searchCondition);
    let param = {
      // name: this.searchCondition.name,
      // email: this.searchCondition.email,
      // page: 0,
      // size: this.size
    };
    this.search(param);
  }

  search(param: any) {}

  openDialogDetail(movie?: any) {
    let param = {
      title: "Movie Detail",
      data: movie,
      width: '60vw'
    }
    this.dialogService.openDialog(MovieManagementDetailComponent, param);
  }
}
