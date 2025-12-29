import { Component,inject } from '@angular/core';
import { scan, checkPermissions, PermissionState, Format, requestPermissions,cancel } from '@tauri-apps/plugin-barcode-scanner'
import { Location } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-scan-qr',
  imports: [MatButtonModule],
  templateUrl: './scan-qr.html',
  styleUrl: './scan-qr.scss'
})
export class ScanQR {

  location = inject(Location);

  async ngOnInit() {
    let permissions: PermissionState | null = null;
    try {
      permissions = await checkPermissions();
    } catch {
      permissions = null
    }

    if (permissions === "prompt" || permissions === "denied") {
      permissions = await requestPermissions();
    }

    if (permissions === "granted") {
      scan({ formats: [Format.QRCode], windowed: true }).then((res) => {
         console.log(res.content)
         this.location.back();
      })
    }
  }

  async cancelScan() {
    await cancel();
    this.location.back();
  }
}
