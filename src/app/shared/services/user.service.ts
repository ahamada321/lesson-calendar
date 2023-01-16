import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public searchUsers(searchWords: any): Observable<any> {
    return this.http.post('/api/v1/users/search', searchWords);
  }

  public sendRequest(student: any): Observable<any> {
    return this.http.post('/api/v1/users', student); // not working yet!!
  }

  //   public updateRental(rentalId: string, rentalData: Rental): Observable<any> {
  //     return this.http.patch('/api/v1/rentals/' + rentalId, rentalData);
  //   }

  //   public getOwnerRentals(pageIndex: number, pageSize: number): Observable<any> {
  //     return this.http.get(
  //       `/api/v1/rentals/manage?page=${pageIndex}&limit=${pageSize}`
  //     );
  //   }

  //   public getUserFavouriteRentals(): Observable<any> {
  //     return this.http.get('/api/v1/rentals/favourite');
  //   }

  //   public toggleFavourite(rentalId: string): Observable<any> {
  //     return this.http.get('/api/v1/rentals/favourite/' + rentalId);
  //   }
}
