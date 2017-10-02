import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class Login{


	constructor(public alertCtrl: AlertController){
	}


	showAlert() {
	    let alert = this.alertCtrl.create({
	      title: 'Login',
	      subTitle: 'Login succesfull!',
	      buttons: ['OK']
	    });
	    alert.present();
	}

}
