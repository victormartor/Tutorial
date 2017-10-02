import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'

@Component({
	selector: 'page-greeter',
	templateUrl: 'greeter.html'
})

export class Greeter{
	user: Student;

	constructor(public alertCtrl: AlertController){
		//this.user = new Student("Jane");
	}

	// greeter(person : Person) {
	// 	//return "Hello, " + person.firstName + " " +person.lastName;
	// 	return "Hello, "+person.fullName;
	// }

	//var user = "Jane User";
	//var user = {firstName: "Jane", lastName: "User"};
	//var user = new Student("Jane","M.","User");

	showPrompt() {
	    let prompt = this.alertCtrl.create({
	      title: 'Login',
	      message: "Introduce tu nombre",
	      inputs: [
	        {
	          name: 'nombre',
	          placeholder: 'Nombre'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancelar',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Guardar',
	          handler: data => {
	          	console.log('Saved clicked');
	          	this.user = new Student(data.nombre);
	          }
	        }
	      ]
	    });
	    prompt.present();
	}
}

class Student {
	//fullName: string;
	// constructor(public firstName: string, public middleInitial: string, public lastName: string){
	// 	this.fullName = firstName+" "+middleInitial+" "+lastName;
	// }
	constructor(public fullName: string){

	}
}

// interface Person {
// 	firstName: string;
// 	lastName: string;
// 	fullName: string;
// }

// function greeter(person : Person) {
// 	//return "Hello, " + person.firstName + " " +person.lastName;
// 	return "Hello, "+person.fullName;
// }
