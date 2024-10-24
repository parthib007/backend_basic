require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const data = {
        "login": "parthib007",
        "id": 98155243,
        "node_id": "U_kgDOBdm66w",
        "avatar_url": "https://avatars.githubusercontent.com/u/98155243?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/parthib007",
        "html_url": "https://github.com/parthib007",
        "followers_url": "https://api.github.com/users/parthib007/followers",
        "following_url": "https://api.github.com/users/parthib007/following{/other_user}",
        "gists_url": "https://api.github.com/users/parthib007/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/parthib007/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/parthib007/subscriptions",
        "organizations_url": "https://api.github.com/users/parthib007/orgs",
        "repos_url": "https://api.github.com/users/parthib007/repos",
        "events_url": "https://api.github.com/users/parthib007/events{/privacy}",
        "received_events_url": "https://api.github.com/users/parthib007/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "parthib_007",
        "company": null,
        "blog": "https://www.instagram.com/007parthib_das/",
        "location": "Kolkata",
        "email": null,
        "hireable": null,
        "bio": "IIT Kharagpur Mechanical Engineering(B-Tech). I am interested in coding but very basic to it. Currently learning C and will learn phython soon",
        "twitter_username": null,
        "public_repos": 21,
        "public_gists": 0,
        "followers": 5,
        "following": 11,
        "created_at": "2022-01-21T09:49:23Z",
        "updated_at": "2024-10-11T09:13:55Z"
}

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req,res)=>{
    res.send('parthibdas')
})

app.get('/login', (req,res)=>{
    res.send('<h1 align="center">Login for more info</h1>')
})

app.get('/github', (req,res)=>{
    res.json(data)
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening to ${port}`)
})