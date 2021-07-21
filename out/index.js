"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
let svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('marc9323', (user) => {
    console.log(user);
});
