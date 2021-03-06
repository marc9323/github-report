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
const GithubApiService_1 = require("./GithubApiService");
const _ = __importStar(require("lodash"));
let svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument');
}
else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user) => {
        svc.getRepos(username, (repos) => {
            let sortedRepos = _.sortBy(repos, [(repo) => repo.size * -1]); // sort by size ascending order
            // take api to get first five
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos; // add the repos to the user object
            console.log(user);
        });
    });
}
