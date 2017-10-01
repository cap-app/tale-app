import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  user: any;

  constructor() {

    this.user = {
      userName: "Ironman",
      location: "hier",
      transitMode: "bicycling",
      _id: "59d02440cacd07202107696a"
    };

    // {
    //   "_id": "59d04d1c6805fc2701a4b783",
    //   "userName": "Iron Man",
    //   "location": "49.010762, 8.408751",
    //   "transitMode": "driving",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04d5d6805fc2701a4b784",
    //   "userName": "Thor",
    //   "location": "48.999061, 8.403639",
    //   "transitMode": "walking",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04d9c6805fc2701a4b785",
    //   "userName": "Hulk",
    //   "location": "49.011054, 8.371315",
    //   "transitMode": "walking",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04df96805fc2701a4b786",
    //   "userName": "Captain America",
    //   "location": "49.021315, 8.382027",
    //   "transitMode": "bicycling",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04e439834d5272435a115",
    //   "userName": "Black Widow",
    //   "location": "49.009726, 8.400507",
    //   "transitMode": "transit",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04e7b9834d5272435a116",
    //   "userName": "Hawkeye",
    //   "location": "48.994634, 8.395185",
    //   "transitMode": "walking",
    //   "__v": 0
    // },
    // {
    //   "_id": "59d04ea19834d5272435a117",
    //   "userName": "Loki",
    //   "location": "48.989424, 8.394341",
    //   "transitMode": "driving",
    //   "__v": 0
    // }

    setInterval(this.updateUser, 5000);
  }

  public getUser(publishUserChange): void {
    return this.user;
  }

  public setTransitMode(mode: string): void {
    this.user.transitMode = mode;
    this.updateUser();
  }

  private updateUser() {
    console.log("update user");
  }
}
