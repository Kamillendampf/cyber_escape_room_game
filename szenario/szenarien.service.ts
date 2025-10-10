import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SzenarienService {

  // █░░░░░░░ (Leicht)   ████░░░░ (Mittel)   ████████ (Schwer)
  private szenarien = [
    {
      "id": 1,
      "title": "VIRUS-X - Die Rettung der Welt",
      "description": "Ein mysteriöses digitales Virus, VIRUS-X, bedroht alle Computersysteme weltweit. Dr. Elias Kovac, ein führender Wissenschaftler im Bereich Cybersicherheit, hat Hinweise hinterlassen, um das Virus zu stoppen. Entschlüsselt die Rätsel und stoppt das Virus, bevor es zu spät ist.",
      "shortDescription": "Löse Rätsel und entschlüssle Codes, um das digitale Virus VIRUS-X zu stoppen.",
      "mission": "Entschlüsselt die E-Mails, folgt den Hinweisen und verhindert, dass VIRUS-X aktiviert wird.",
      "features": "Verschlüsselung, Fibonacci-Reihe, Passwortprüfung, Binär-Code, Sicherheitsüberprüfung, Anagramme",
      "difficulty": "████████ (Schwer)",
      status: 'LIVE'
    }

  ];

  // Methode, um alle Szenarien abzurufen
  getSzenarien() {
    return this.szenarien;
  }

  // Methode, um ein Szenario anhand der ID abzurufen
  getSzenarioById(id: number) {
    return this.szenarien.find(szenario => szenario.id === id);
  }

  constructor() { }
}
