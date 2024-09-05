import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Editor } from 'primeng/editor';
import { FileUpload } from 'primeng/fileupload';
import Quill from 'quill';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-management-detail',
  templateUrl: './movie-management-detail.component.html',
  styleUrls: ['./movie-management-detail.component.css']
})
export class MovieManagementDetailComponent implements OnInit {
  @ViewChild('editor', { static: false }) editor!: ElementRef;
  @ViewChild('quillEditor', { static: false }) quillEditor!: Editor;
  quillInstance: Quill | undefined;
  data: any;
  imageUrl: string = "";
  altText: string = 'Uploaded Image';
  selectedFile: File | null = null;
  movie: Movie = {
    id: 0,
    movieName: '',
    description: ''
  };
  countries: any[] = [];
  listReleaseYear: any[] = [];
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { 
    this.data = config.data;
  }

  ngOnInit(): void {
    this.listReleaseYear = this.generateReleaseYearArray();
    if(this.data && this.data.id) {
      this.movie = {
        id: 0,
        movieName: "movie name",
        releaseYear: "1999",
        description: "<p>text editor</p>"
      };
    }
  }

  ngAfterViewInit() {
    // Access the Quill instance after the view has been initialized
    setTimeout(() => {
      if (this.quillEditor && this.quillEditor.getQuill()) {
        this.quillInstance = this.quillEditor.getQuill();
      }
      this.setContent(this.movie.description);
    }, 500);
  }

  setContent(content: string) {
    if (this.quillInstance) {
      this.quillInstance.clipboard.dangerouslyPasteHTML(content);
    } 
  }

  onFileSelect(event: any) {
    this.selectedFile = event.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
    
  }

  clearFileSelection(fileUpload: FileUpload) {
    fileUpload.clear(); // Clear the file input
    this.selectedFile = null; // Reset the selected file
    this.imageUrl = "";
    console.log('File selection cleared.');
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

  submitForm() {
    this.movie.image = this.imageUrl;
    console.log(this.movie)
  }

}
