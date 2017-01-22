import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User} from "../_models/index";

@Injectable()
export class UserService {
    url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:3000/api';
    }
    getAll() {
        return this.http.get(this.url + '/users', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get(this.url + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
    create(user: User) {
        return this.http.post(this.url + '/api/users', user, this.jwt()).map((response: Response) => response.json());
    }
    update(user: User) {
        return this.http.put( this.url + '/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.delete(this.url + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}