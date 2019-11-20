## Project Overview

Teamwork is an **internal social network** for employees of an organization. The goal of this
application is to facilitate more interaction between colleagues and promote team bonding.

## Features

● Admin can create an employee user account.
● Admin/Employees can sign in.
● Employees can post gifs.
● Employees can write and post articles.
● Employees can edit their articles.
● Employees can delete their articles.
● Employees can delete their gifs post.
● Employees can comment on other colleagues' article post.
● Employees can comment on other colleagues' gif post.
● Employees can view all articles and gifs, showing the most recently posted articles or gifs
first.
● Employees can view a specific article.
● Employees can view a specific gif post.
Optional Features
● Employees can view all articles that belong to a category (tag).
● Employees can flag a comment, article and/or gif as inappropriate.
● Admin can delete a comment, article and/or gif flagged as inappropriate.

## Tools used
● Cloudinary
● TravisCI
● Postman

## List of API Endpoints
| Endpoints  | Usage |
| ------------- | ------------- |
| POST /auth/create-user  | Create user account  |
| POST /auth/signin  | Admin/Employees can sign in Put some of your user data in your token’s payload.  |
|POST /gifs  | Create a gif  |
| POST /articles  | Create an article  |
| PATCH /articles/<:articleId>  | Edit an article  |
| DELETE /articles/<:articleId>  | Employees can delete their articles  |
| DELETE /gifs/<:gifId> | Employees can delete their gifs   |
| POST /articles/<articleId>/comment | Employees can comment on other colleagues' article post.  |
| POST /gifs/<:gifId>/comment | Employees can comment on other colleagues' gif post  |
| GET /feed | Employees can view all articles or gifs, showing the most recently posted articles or gifs first.  |
| GET /articles/<:articleId>  | Employees can view a specific article. |
| GET /gifs/<:gifId> | Employees can view a specific gif post.  |


