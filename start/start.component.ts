import {Component} from '@angular/core';
import {SzenarienService} from '../szenario/szenarien.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  standalone: true,
  styleUrl: './start.component.css'
})
export class StartComponent {
  releaseDate: Date = new Date('2025-03-16T12:34:56');

  latest_game_name: string = "No Name"




  process_id: number = 4721;
  subprocess_1: number = 4722;
  subprocess_2: number = 4723;

  uptime = "2h 15m";

  //------------------

  mission: string = "No Value"
  features: string = "No Value"
  heaviness: string = "No value" // ██░░░░░░ (Leicht) █████░░░ (Mittel) ████████ (Schwer)


  //------------------


  start_time: string = this.releaseDate.toISOString().slice(0, 19).replace('T', ' ');
  latest_szenario

  constructor(private szenarios: SzenarienService, private router: Router) {
    this.calculateUptime();
    this.latest_szenario = szenarios.getSzenarien()[szenarios.getSzenarien().length - 1]
    this.latest_game_name = this.latest_szenario.title
    this.mission = this.latest_szenario.mission
    this.heaviness = this.latest_szenario.difficulty
    this.features = this.latest_szenario.features
  }

  // Berechnung der Uptime
  calculateUptime(): void {
    const currentTime = new Date();
    const uptimeInMs = currentTime.getTime() - this.releaseDate.getTime(); // Zeitdifferenz in Millisekunden

    // Umrechnung in Stunden und Minuten
    const uptimeInMinutes = Math.floor(uptimeInMs / 60000);
    const hours = Math.floor(uptimeInMinutes / 60);
    const minutes = uptimeInMinutes % 60;

    // Formatierte Uptime
    this.uptime = `${hours}h ${minutes}m`;

  }

  toGameSide() {
    this.router.navigate(['/szenarien', this.latest_szenario.id]).then(r => {
    });
  }

}
