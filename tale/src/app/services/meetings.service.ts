import {Injectable} from '@angular/core';

@Injectable()
export class MeetingsService {

  meetingsForUser: any;

  constructor() {

    this.meetingsForUser = [{
      userName: "Ironman",
      location: "hier",
      transitMode: "bicycling",
      _id: "59d02440cacd07202107696a"
    }];

    setInterval(this.updateMeetingsForUser, 3000);
  }

  public getMeetingsForUser(): void {
    let meetingsForUser = [];

    this.meetingsForUser = meetingsForUser;
  }

  private updateMeetingsForUser() {
    console.log("update meetings");
  }
}
