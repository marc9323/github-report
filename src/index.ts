import { GithubApiService } from "./GithubApiService";
import * as _ from 'lodash';
import { Repo } from "./Repo";
import { User } from "./User";

let svc = new GithubApiService();

if(process.argv.length < 3) {
    console.log('Please pass the username as an argument');
} else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]); // sort by size ascending order

        // take api to get first five
        let filteredRepos = _.take(sortedRepos, 5);

        user.repos = filteredRepos; // add the repos to the user object

        console.log(user);
        });
    });
}
        
 
