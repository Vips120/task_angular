import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private FUNDS_API = "../assets/funds.json";
  constructor(private http: HttpClient) { }

  public fetchfundsData(){
    return this.http.get(this.FUNDS_API);
  }
}
