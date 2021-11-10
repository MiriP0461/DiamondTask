import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { diamond } from '../classes/diamond';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {
 
url="api/Diamond/"
  constructor(private http:HttpClient) { }

  getAllDiamonds():Observable<Array<diamond>>
  {
    return this.http.get<Array<diamond>>(this.url+"ReadExcel/Diamonds.csv")
    
  }

  addDiamond(d:diamond):Observable<void>
  {debugger
    return this.http.post<void>(this.url+"WriteCSVFile/Diamonds.csv",d)
  }
}
