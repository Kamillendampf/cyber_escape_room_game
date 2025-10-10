import {Routes} from '@angular/router';
import {SzenarioComponent} from './szenario/szenario.component';
import {FaqComponent} from './faq/faq.component';
import {StartComponent} from './start/start.component';
import {SzenarioDeteilsComponent} from './szenario/szenario-deteils/szenario-deteils.component';
import {VirusXComponent} from '../game/virus-x/virus-x.component';
import {VirusXGameComponent} from '../game/virus-x/virus-x-game/virus-x-game.component';
import {DanksagungComponent} from './danksagung/danksagung.component';

export const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'szenario', component: SzenarioComponent},
  {path: 'szenarien/:id', component: SzenarioDeteilsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'game/1', component: VirusXComponent},
  {path: 'game/virus-x', component: VirusXGameComponent},
  {path: 'game/danksagung', component: DanksagungComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
];
