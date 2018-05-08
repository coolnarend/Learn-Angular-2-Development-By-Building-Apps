import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'fe8ec9bba642959c80d1';
    private client_secret = 'd207ba397845af35e6a5e6a1873bd4f6ef490736';

    constructor(private _http: Http) {
        console.log('Github service ready...');
        this.username = 'coolnarend';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+ this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+ this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}