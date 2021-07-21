import { GithubApiService } from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('marc9323', (user: User) => {
    console.log(user);
});

console.log("BETWEEn");

svc.getRepos('marc9323', (repos: Repo[]) => {
    console.log("GET REPOS HIT");
    console.log(repos);
})