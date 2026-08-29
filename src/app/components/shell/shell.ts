import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from "@angular/router"

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet],
  templateUrl: './shell.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './shell.scss'
})
export class Shell {

}
