import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormsModule } from "@angular/forms";
import { GetDataService } from '../../services/get-data.service';
import { Taxi } from '../../models/Taxi';

import { PostDataService } from '../../services/post-data.service';

import { Observable } from 'rxjs/Observable';

@Component({
    //moduleId: module.id,
    selector: 'BookNewTaxi',
    templateUrl: './book_new_taxi.html'
})
export class BookNewTaxi implements OnInit {
    constructor(
        private http: Http,
        public post: PostDataService,
        private ngZone: NgZone) { }
    public latitude: number;
    public longitude: number;

    ngOnInit() {

    }
    model = { pickLocation: 'BTM', dropLocation: 'HSR', phone: '9999999999', vehicleType: 'shuttle', paymentMode: 'cash' };
    pick_sugg = [];
    drop_sugg = [];

    updateDropLoc(ev) {
        this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
            ev.target.value + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then((res) => {
                res = res.json()
                this.drop_sugg = res['predictions'];
                this.model.dropLocation = res['predictions'][0].description;
            })
    }

    updatePickLoc(ev) {
        this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
            ev.target.value + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then((res) => {
                res = res.json()
                this.pick_sugg = res['predictions']
                this.model.pickLocation = res['predictions'][0].description;
            })
    }

    onSubmit() {

    }
    dropLatitude; dropLongitude; pickupLatitude; pickupLongitude;


    newTaxi() {
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
            this.model.dropLocation
            + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then((res) => {
                res = res.json();
                res = res['results']['0']
                this.dropLatitude = res['geometry']['location']['lat'];
                this.dropLongitude = res['geometry']['location']['lng'];

                this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
                    this.model.pickLocation
                    + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then((res) => {
                        res = res.json();
                        res = res['results']['0']
                        this.pickupLatitude = res['geometry']['location']['lat'];
                        this.pickupLongitude = res['geometry']['location']['lng'];

                        this.postOnFinish()
                    })
            })
    }


    postOnFinish() {
        let url = 'https://oyicab.herokuapp.com/api/book_ride_from_admin';
        let body = 'pickupLatitude=' + this.pickupLatitude +
            '&pickupLongitude=' + this.pickupLongitude +
            '&dropLatitude=' + this.dropLatitude +
            '&dropLongitude=' + this.dropLongitude +
            '&phone=' + this.model.phone +
            '&vehicleType=' + this.model.vehicleType +
            '&paymentMode=' + this.model.paymentMode;
        this.post.postData(url, body).then((res) => {
            if (res.statusText == "OK") {
                alert('Your ' + this.model.vehicleType + " is booked")
            }
        })
    }

}
