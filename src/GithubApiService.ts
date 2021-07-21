import * as request from 'request';

export class GithubApiService {

    // method ot make user api call
    getUserInfo(userName: string) {
        request.get('https://api.github.com/users/' + userName, null, (response: any) => {
            console.log(response);
        });
    }

    // repos api call
    getRepos() {

    }
}