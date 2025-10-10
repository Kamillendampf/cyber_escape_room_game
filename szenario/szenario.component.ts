import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';
import {SzenarienService} from './szenarien.service';

@Component({
  selector: 'app-szenario',
  imports: [
    NgForOf
  ],
  templateUrl: './szenario.component.html',
  standalone: true,
  styleUrl: './szenario.component.css'
})
export class SzenarioComponent implements OnInit{
  szenarien: any[] = [];

  constructor(private szenarienService: SzenarienService, private router: Router) {}

  ngOnInit(): void {
    // Szenarien über den Service laden
    this.szenarien = this.szenarienService.getSzenarien();
  }
  goToSzenarioDetail(szenarioId: number): void {
    this.router.navigate(['/szenarien', szenarioId]).then(r => {});
  }

}
