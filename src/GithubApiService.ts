import * as request from 'request';
import { User } from './User';

export class GithubApiService {

    // method ot make user api call
    getUserInfo(userName: string, cb: (user: User) => any) {
        let options: any = {
            headers: {
                'User-Agent': 'request'
            },
            json: true // so we needn't JSON.parse(body) below
        };

        request.get('https://api.github.com/users/' + userName, options, (error: any, response: any, body: any) => {
           // console.log(body);
           // the json is returned as a string by default so prior to passing it to the User constructor
           // we need to parse it
            //let user = new User(JSON.parse(body));
            let user = new User(body);
           // console.log(user);
            cb(user);
        });
    }

    // repos api call
    getRepos() {

    }
}