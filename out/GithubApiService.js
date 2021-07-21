"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
const request = __importStar(require("request"));
const Repo_1 = require("./Repo");
const User_1 = require("./User");
const OPTIONS = {
    headers: {
        "User-Agent": "request",
    },
    json: true, // so we needn't JSON.parse(body) below
};
class GithubApiService {
    // method ot make user api call
    getUserInfo(userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error, response, body) => {
            // console.log(body);
            // the json is returned as a string by default so prior to passing it to the User constructor
            // we need to parse it
            //let user = new User(JSON.parse(body));
            let user = new User_1.User(body);
            // console.log(user);
            cb(user);
        });
    }
    // repos api call
    getRepos(userName, cb) {
        request.get("https://api.github.com/users/" + userName + '/repos', OPTIONS, (error, response, body) => {
            //   let repoArray = body;
            //   // construct a Repo instance for each element of the repos array
            //    repoArray.map((repo: any) => new Repo(repo))
            //    cb(repoArray);
            // repos - array of repo instances
            let repos = body.map((repo) => new Repo_1.Repo(repo));
            cb(repos);
        });
    }
}
exports.GithubApiService = GithubApiService;
// The map function executes the function passed to it for eah element of the arry
// and returns a new array with the corresponding return values
