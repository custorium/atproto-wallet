import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";
import { getCurrent, onOpenUrl, isRegistered } from '@tauri-apps/plugin-deep-link'

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {

  async ngOnInit() {
    const startUrls = await getCurrent()
    if (startUrls) {
    }
    await onOpenUrl((urls) => {
      this.error = urls
    })
  }

  greetingMessage = "";
  registered = false
  error:any = ""

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }


}
