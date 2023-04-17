import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserslistService {

  constructor() { }

  getUsers():Array<any> {
     return [
    {id: 1,name: 'ABC'},
     {id: 2,name: 'XYZ'}
    ]}
}
