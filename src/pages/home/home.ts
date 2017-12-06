import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import { SMS } from '@ionic-native/sms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private sms: SMS, public navCtrl: NavController, public authProvider: AuthProvider) {}

  /**
   * Calls the authentication provider and logs the user out, on successful logout it sends the user
   * back to the login page.
   */
  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
  sendMessage(){
    this.sms.send('5136808228','Hello');
  }
}
