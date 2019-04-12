import { Coin } from './../model/coin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CoinService {
	serverURL = 'https://api.coinpaprika.com/v1/coins';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(public http: HttpClient) { }

	getCoins() {
		return this.http.get(this.serverURL);
	}
	getCoinsById(id: string) {
		return this.http.get(this.serverURL + '/' + id);
	}
}
