import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../app/services/user.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  selectedItem: any;

  meetings: any = [];

  icons: any = ['beer', 'football', 'build'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private userService: UserService) {
    // If we navigated to this page, we will have an item available as a nav param
    let __this = this;

    this.selectedItem = navParams.get('item');

    this.http.get('http://139.162.130.38:1473/groups/user/' + this.userService.getUser()._id).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      __this.meetings = data;
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
