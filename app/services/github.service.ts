import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id:string='513e5f383e136743b40e';
    private client_secret:string='66343b97d51ca8538317c7d388206a2ed1c5636a';
    constructor(private _http: Http) {
        console.log('GithubService ready...');
        this.username='gremrok';
        this.client_id='';
        this.client_secret='';
    }

    getUser(){
        return this._http.get(
            'http://api.github.com/users/'+this.username+
            '?client_id='+this.client_id+
            '&client_secret='+this.client_secret)
            .map(res=> res.json());
    }   

    getRepos(){
        return this._http.get(
            'http://api.github.com/users/'+this.username+
            '/repos?client_id='+this.client_id+
            '&client_secret='+this.client_secret)
            .map(res=> res.json());
    }   

    updateUser(username: string){
        this.username = username;
    }
}

