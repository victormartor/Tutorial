import { Component } from '@angular/core';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  lat: number;// = 51.678418;
  lng: number;// = 7.809007;
  error_message1 : string = "correcto";
  
  mi_lat: number;
  mi_lng: number;
  error_message2 : string = "correcto";

  
  positions: position[];

  constructor() {

    this.positions = new Array();
    for(var i=0;i<10;i++)
    {
      this.positions.push(new position(37.4+i*0.001, -6+i*0.001));
    }
    /*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        //var marker = create(position.coords.latitude, position.coords.longitude);
        //invokeSuccessCallback(successCallback, marker);
        MapPage.lat = position.coords.latitude;
        MapPage.lng = position.coords.longitude;
        console.log(MapPage.lat+" "+MapPage.lng);
      });
    } else {
      alert('Unable to locate current position');
    }
    */
    //obtenerGeo(this.lat, this.lng);
    //obtenerGeo();
    // navigator.geolocation.watchPosition((position) => 
    //   {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //   });
      
    navigator.geolocation.getCurrentPosition(this.obtenerMap.bind(this),this.error1.bind(this));
    //navigator.geolocation.watchPosition(this.obtenerGeo.bind(this),this.error2.bind(this));
    navigator.geolocation.getCurrentPosition(this.obtenerGeo.bind(this));
    console.log(this.lat+" "+this.lng);
  }

  obtenerMap(pos)
  {
    this.lat = pos.coords.latitude;
    this.lng = pos.coords.longitude;
    this.error_message1 = "coordenadas mapa";
  }

  error1(err) 
  {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    this.error_message1 = err.message;
  }

  obtenerGeo(pos)
  {
    this.mi_lat = pos.coords.latitude;
    this.mi_lng = pos.coords.longitude;
    console.log("funcion "+pos.coords.latitude+" "+pos.coords.longitude);
    this.error_message2 = "coordenadas marker";
  }

  error2(err) 
  {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    this.error_message2 = err.message;
  }

  async simular()
  {
    for(var i=0;i<50;i++)
    {
      for(let position of this.positions)
      {
        position.mi_lat += 0.00001;
        position.mi_lng += 0.00001;
        //console.log("iteracion "+i);
      }
      // this.lat += 0.00001;
      // this.lng += 0.00001;
      // this.mi_lat += 0.00001;
      // this.mi_lng += 0.00001;
      // console.log("iteracion "+i);
      await esperar();
    }
  }

}

function esperar()
{
  return new Promise(resolve => setTimeout(resolve, 500));
}

// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// };

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

class position{
     //public mi_lat: number;
     //public mi_lng: number;

     constructor(public mi_lat: number, public mi_lng: number){}
  }

// function obtenerGeo(lat: number, lng: number)
// {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         lat = position.coords.latitude;
//         lng = position.coords.longitude;
//         console.log("funcion "+lat+" "+lng);
//       });
//   } else {
//       alert('Unable to locate current position');
//   }
// }

// function obtenerGeo(pos)
// {
//   console.log("funcion "+pos.coords.latitude+" "+pos.coords.longitude);
// }

//navigator.geolocation.getCurrentPosition(MapPage.obtenerGeo);