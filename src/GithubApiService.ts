import * as request from "request";
import { Repo } from "./Repo";
import { User } from "./User";

const OPTIONS: any = {
  headers: {
    "User-Agent": "request",
  },
  json: true, // so we needn't JSON.parse(body) below
};

export class GithubApiService {
  // method ot make user api call
  getUserInfo(userName: string, cb: (user: User) => any) {
    request.get(
      "https://api.github.com/users/" + userName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        // console.log(body);
        // the json is returned as a string by default so prior to passing it to the User constructor
        // we need to parse it
        //let user = new User(JSON.parse(body));
        let user = new User(body);
        // console.log(user);
        cb(user);
      }
    );
  }

  // repos api call
  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    request.get(
        "https://api.github.com/users/" + userName + '/repos',
        OPTIONS,
        (error: any, response: any, body: any) => {
        //   let repoArray = body;
        //   // construct a Repo instance for each element of the repos array
        //    repoArray.map((repo: any) => new Repo(repo))
        //    cb(repoArray);

        // repos - array of repo instances
        let repos = body.map((repo: any) => new Repo(repo));
        cb(repos);
        }
      );
  }
}


// The map function executes the function passed to it for eah element of the arry
// and returns a new array with the corresponding return values