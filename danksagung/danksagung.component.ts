import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-danksagung',
  imports: [],
  templateUrl: './danksagung.component.html',
  standalone: true,
  styleUrl: './danksagung.component.css'
})
export class DanksagungComponent {
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['/']); // Navigiert zur Startseite
  }
}
