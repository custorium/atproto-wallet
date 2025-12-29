import { Routes } from "@angular/router";
import { Shell } from './components/shell/shell'
import { Identites } from './components/identites/identites'
import { ScanQR } from './components/scan-qr/scan-qr'

export const routes: Routes = [
    {
        path:'',component:Shell,
        //canActivate...
        children:[
           {path:'',redirectTo:'identities',pathMatch:'full'},
           {path:'identities',component:Identites},
           {path:'scan',component:ScanQR}
        ] 
    }
];
