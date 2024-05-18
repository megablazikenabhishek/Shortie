import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.hero-section.css'],
})
export class MainComponent {
  generatedUrl: string = '';
  actualUrl: string = '';
  backendUrl: string = 'https://shortie-hxo4.onrender.com';

  constructor(private snackBar: MatSnackBar) {}

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedUrl).then(() => {
      this.snackBar.open('URL copied to clipboard!', 'Close', {
        duration: 2000,
      });
    });
  }

  isValidHttpUrl() {
    let url;
    
    try {
      url = new URL(this.actualUrl);
    } catch (_) {
      return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  async generateShortUrl() {
    const { data } = await axios.post(
      `${this.backendUrl}/addUrl?actual_url=${this.actualUrl}`
    );
    console.log(data);
    if (data.actualUrl === null)
      this.snackBar.open('Something Went Wrong!!!', 'Close', {
        duration: 3000,
      });
    else this.generatedUrl = window.location.href + data.shortUrl;
  }
}
