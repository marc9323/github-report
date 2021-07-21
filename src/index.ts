import { GithubApiService } from './GithubApiService';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('marc9323', (user: User) => {
    console.log(user);
});