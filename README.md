# Research organization

A website for a research organization with stripe payment system

## Features

- Sign up
- Login
- Register as a member
- Publish research papers
- Subscribe as a member

## Functional features

- Sign up
- login
- edit(update,delete) account
- logout
- add(edit, update,delete) research paper
- register as a member
- send payment request to stripe/paystack
- place order after payment request
- send email to user and organization after placing order

## APIS

- /api/v1/papers/create
- /api/v1/papers
- /api/v1/papers/:id

- /api/v1/account/create
- /api/v1/account/login
- /api/v1/account

- /api/v1/publications/create
- /api/v1/publications
- /api/v1/publications/:id

- /api/v1/conferences/create
- /api/v1/conferences
- /api/v1/conferences/:id

- /api/v1/articles/create
- /api/v1/articles
- /api/v1/articles/:id

- /api/v1/payments/create
- /api/v1/payments
- /api/v1/payments/:id


## Technology

- Languages - Javascript
- Framework - React(NextJS)
- Libraries (packages) - uuid, jsonwebtoken, bcrypt, react-icons, moment.js, stripe
- Server - NodeJS, ExpressJS
- Dev OPS - Vercel or Azure
- Database - MongoDB
- Tools - webpack, sass
