import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router'
import { AsyncPipe } from '@angular/common'
import { MatButtonModule, MatFabButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatCardModule } from '@angular/material/card';
import { IdentityManager } from '../../services/identity'

@Component({
  selector: 'app-identites',
  imports: [
    MatIcon,
    MatButtonModule,
    RouterLink,
    MatFabButton,
    MatTooltipModule,
    MatCardModule,
    AsyncPipe
  ],
  templateUrl: './identites.html',
  styleUrl: './identites.scss'
})
export class Identites {
  identityManager = inject(IdentityManager)
  identities = this.identityManager.GetIdentities()

  async ngOnInit() {
  }
}
