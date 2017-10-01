import {Injectable} from '@angular/core';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  user: any;

  constructor(private http: HttpClient, private backgroundGeolocation: BackgroundGeolocation) {

    console.table(this.getUsers());

    let __this = this;

    __this.user = {
      userName: "Ironman",
      location: "49.010762, 8.408751",
      transitMode: "bicycling",
      _id: "59d02440cacd07202107696a"
    };

    if ((typeof __this.backgroundGeolocation) !== undefined) {

      const config: BackgroundGeolocationConfig = {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true, //  enable __this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false, // enable __this to clear background location settings when the app terminates
      };

      __this.backgroundGeolocation.configure(config).subscribe((location: BackgroundGeolocationResponse) => {

        __this.updateUserLocation(location.latitude, location.longitude);

        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do __this regardless if your HTTP request is successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        __this.backgroundGeolocation.finish(); // FOR IOS ONLY

      });

      // start recording location
      __this.backgroundGeolocation.start();
    }

    // start fetching HTML5 location - as fallback
    setInterval(__this.getHtml5Location, 5000);
  }

  public getUser(publishUserChange): void {
    return this.user;
  }

  public getUsers(): any {
    this.http.get('http://139.162.130.38:1473/users').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
  }

  public setTransitMode(mode: string): void {
    this.user.transitMode = mode;
    this.putUser();
  }

  private getHtml5Location(): void {
    let __this = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (location) {
        // __this.updateUserLocation(location.coords.latitude, location.coords.longitude);
        console.log("ping pong");
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  private updateUserLocation(latitude, longitude) {
    console.log("location before: " + this.user.location);
    this.user.location = latitude + ", " + longitude;
    console.log("location after: " + this.user.location);
    this.putUser();
  }

  private putUser(): void {
    console.log("put user");
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(this.user);

    // this.http.put("http://139.162.130.38:1473/users", JSON.stringify(body)).map(res => res.json()).subscribe(
    //   data => {
    //     console.log('the consultation was completed I think with success:', [data]);
    //   },
    //   err => {
    //     console.log("query error: ", err);
    //   }
    // )
  }
}
