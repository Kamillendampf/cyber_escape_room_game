import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SzenarienService} from '../szenarien.service';

@Component({
  selector: 'app-szenario-deteils',
  imports: [],
  templateUrl: './szenario-deteils.component.html',
  standalone: true,
  styleUrl: './szenario-deteils.component.css'
})
export class SzenarioDeteilsComponent implements OnInit{
  szenario: any;

  constructor(private route: ActivatedRoute, private szenarienService: SzenarienService, private router : Router) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    const szenarioId: number = paramId != null ? +paramId! : 0;

    this.szenario = this.szenarienService.getSzenarioById(szenarioId);
  }

  startGame(): void {
    this.router.navigate([`/game/${this.szenario.id}`]).then(r => {});
  }
}
