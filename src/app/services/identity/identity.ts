import { Injectable } from '@angular/core'
import { Observable,BehaviorSubject } from 'rxjs'
import { Identity } from '../../models/identity'

@Injectable({providedIn: 'root'})
export class IdentityManager {

     identities :BehaviorSubject<Identity[]> = new BehaviorSubject<Identity[]>([])

    public GetIdentities():Observable<Identity[]> {
        return this.identities;
    }

    public AddIdentity(id:Identity) {
        this.identities.value.push(id)
    }
}