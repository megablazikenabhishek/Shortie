import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.hero-section.css'],
})
export class MainComponent {
  generatedUrl: string = 'abcd';

  constructor(private snackBar: MatSnackBar) {}

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedUrl).then(() => {
      this.snackBar.open('URL copied to clipboard!', 'Close', {
        duration: 2000,
      });
    });
  }
}
