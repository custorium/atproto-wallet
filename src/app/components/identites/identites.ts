import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { MatButtonModule, MatFabButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltipModule } from "@angular/material/tooltip"
import { DatePipe, NgClass } from '@angular/common'

@Component({
  selector: 'app-identites',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink,
    DatePipe,
    MatToolbar,
    MatFabButton,
    MatTooltipModule,
    NgClass
  ],
  templateUrl: './identites.html',
  styleUrl: './identites.scss'
})
export class Identites {

}
