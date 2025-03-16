require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "MRsajal",
  id: 113850934,
  node_id: "U_kgDOBsk6Ng",
  avatar_url: "https://avatars.githubusercontent.com/u/113850934?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MRsajal",
  html_url: "https://github.com/MRsajal",
  followers_url: "https://api.github.com/users/MRsajal/followers",
  following_url: "https://api.github.com/users/MRsajal/following{/other_user}",
  gists_url: "https://api.github.com/users/MRsajal/gists{/gist_id}",
  starred_url: "https://api.github.com/users/MRsajal/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MRsajal/subscriptions",
  organizations_url: "https://api.github.com/users/MRsajal/orgs",
  repos_url: "https://api.github.com/users/MRsajal/repos",
  events_url: "https://api.github.com/users/MRsajal/events{/privacy}",
  received_events_url: "https://api.github.com/users/MRsajal/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-09-18T16:40:34Z",
  updated_at: "2025-03-14T18:16:01Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>please help sajal </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Express</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
