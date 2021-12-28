import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'mon-domaine-presensation';

  enviorrnrmrntStatus?: StatusObject;

  constructor(private _httpClient: HttpClient){}

  // appeler le backend
  getEnviorrnrmrntStatus() : void {
    this._httpClient.get('http://localhost:8080/service/interaction/mon-domaine/sante')
    .subscribe(response => {
      console.log('*********** Reponse :');
      console.log(response);
      this.enviorrnrmrntStatus = response;
    });
  }
}

export interface StatusObject {
  serviceInteraction?: string;
  serviceMetier?: string;
  serviceConfigServer?: string;
  serviceDiscovery?: string;
}
