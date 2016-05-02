# CS Wiki
**By: Christian J. Hughes**

This package contains all of the server and client side files required to host a basic Computer Science Wiki, complete with user authentication.

## Installation and Configuration
Download and unzip the complete "cs_wiki" directory. Two sample wikis are included are included -- if you are inclined to start with a clean database, simply run `node database/seed.js`.

## Running The Application
Run the server using node. Navigate into the "blog" directory and calling:

```
node app.js
```

Navigate to port 8080 on the client-side to access the web content.

## Application Usage
_Index_: The index page contains a list of all current wiki pages. There is also a 'log in' link on this page.

_Wiki Pages_: Each wiki page contains a **Content Page** and a **Talk Page** on the topic. The Content Page is the main article/information hub for the given topic. The Talk Page allows editors to discuss what goes on the Content Page.

_Authentication_: There are two types of users: Admins, and non-admins. Admins have the ability to view other users, and ban them. This can be done by navigating to '/users' while logged in as admin.

Sample user accounts have been included with the application for testing purposes. Accounts are as follows:
- username: admin1 -  password: 0000 - Banned?: no
- username: admin2 - password: 0000 - Banned?: no
- username: bob - password: 1111 - Banned?: no
- username: christian - password: 1111 - Banned?: no
- username: bannedGuy - password: 1111 - Banned?: yes

Non-banned users can edit the content & talk pages. Editing & commenting tools will only appear once a non-banned user is logged-in.

_Writing Content_: All content and comments can be written in **Markdown**, which allows for advanced formatting. The **Markdown** will be automatically converted into HTML on the page (using the node "marked" package).

**Useful Features for Later (beyond assignment requirements):**
1. Store encrypted passwords for more secure authentication.
2. Make things prettier with CSS.
3. Making editing a bit more fluid via AJAX.
