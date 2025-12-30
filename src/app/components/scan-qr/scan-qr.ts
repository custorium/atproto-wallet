import { Component,inject } from '@angular/core';
import { scan, checkPermissions, PermissionState, Format, requestPermissions,cancel } from '@tauri-apps/plugin-barcode-scanner'
import { Location } from '@angular/common'
import { IdentityManager } from '../../services/identity'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-scan-qr',
  imports: [MatButtonModule, MatTooltipModule, MatIcon],
  templateUrl: './scan-qr.html',
  styleUrl: './scan-qr.scss'
})
export class ScanQR {

  location = inject(Location);
  identityManager = inject(IdentityManager)
  hasScanner = false

  async ngOnInit() {
    let permissions: PermissionState | null = null;
    try {
      permissions = await checkPermissions();
      this.hasScanner=true
    } catch {
      permissions = null
      this.hasScanner=false
    }

    if (permissions === "prompt" || permissions === "denied") {
      permissions = await requestPermissions();
    }

    if (permissions === "granted") {
      scan({ formats: [Format.QRCode], windowed: true }).then((res) => {
         console.log(res.content)
         this.identityManager.AddIdentity({
            did: "did:plc:q3enoeuha5b2zx4p4atxtb7x",
            alsoKnownAs:"at://willem.dobs.nl"
         })
         this.location.back();
      })
    }
  }

  async cancelScan() {
    if(this.hasScanner) await cancel();
    this.location.back();
  }
}
