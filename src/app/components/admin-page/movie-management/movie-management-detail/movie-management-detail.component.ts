import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-movie-management-detail',
  templateUrl: './movie-management-detail.component.html',
  styleUrls: ['./movie-management-detail.component.css']
})
export class MovieManagementDetailComponent implements OnInit {

  data: any;
  imageUrl: string | ArrayBuffer | null = null;
  altText: string = 'Uploaded Image';
  selectedFile: File | null = null;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { 
    this.data = config.data;
  }

  ngOnInit(): void {
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

}
