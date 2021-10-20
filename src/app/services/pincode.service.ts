import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  constructor(private _httpClient: HttpClient) { }

  GetAddress(pincode: string) {
    //https://api.postalpincode.in/pincode/627603
    return this._httpClient.get("https://api.postalpincode.in/pincode/" + pincode );
  }
}
