import { Component } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  //title = 'TransDigital';
  arreglo = ['Administración de servicios TI, recursos informáticos y contratos de servicios en sede principal y 5 subsedes (INTRANET)',
    'Consolidación de implementación del ERP BAAN V',
    "Diseño y construcción de los MDF's de la INTRANET",
    'Migración de la operación crítica de Data Center Comercial'];

  public personas: Array<any>=[]

  constructor(private personaService:PersonaService)
    {
      this.personaService.getPersonas().subscribe((resp: any)=>{
        console.log (resp)
        this.personas = resp
      })
    }

}



