import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { MatButtonModule, MatFabButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { MatTooltipModule } from "@angular/material/tooltip"

@Component({
  selector: 'app-identites',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink,
    MatFabButton,
    MatTooltipModule,
  ],
  templateUrl: './identites.html',
  styleUrl: './identites.scss'
})
export class Identites {

}
