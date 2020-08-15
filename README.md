# ChatIT ![React](https://img.shields.io/badge/React-16.13.1-blue?style=for-the-badge&logo=react&logoColor=oceanBlue)

ChatIT is a Q&A platform for business meetings and events, but it works great for chats
between friends as well. It offers an interactive Q&A and gives you some information about
your audience. If you need to host a meeting online, ChatIT is here to help you make it
interactive. The platform makes it easy to engage with your audience, whether you run a
large video conference, a small team meeting, or you just want to ask your friends a
question. Because in the end, the important thing is everyone to become part of the conversation.

---

![GitHub pull requests](https://img.shields.io/github/issues-pr/tonyhristov/ChatIT?logo=github&logoColor=brightgreen&style=for-the-badge)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/tonyhristov/ChatIT?color=brightgreen&logo=github&logoColor=brightgreen&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/tonyhristov/ChatIT?color=blue&logo=github&logoColor=blue&style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/tonyhristov/ChatIT?color=yellow&logo=github&logoColor=yellow&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed/tonyhristov/ChatIT?color=green&logo=github&logoColor=green&style=for-the-badge)

---

## Made with

- Task Manager
  - [Trello](https://trello.com/home)
- File Storage
  - [Cloudinary](https://cloudinary.com/)
- Server Side
  - [ExpressJS](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
- Client Side
  - [ReactJS](https://reactjs.org/)

## How to Install and Run

Check the READMEs for both client and server side

- [Client Side README](https://github.com/tonyhristov/ChatIT/blob/master/client-side/README.md)
- [Server Side README](https://github.com/tonyhristov/ChatIT/blob/master/server-side/README.md)

## Architecture

```
|   .gitignore
|   LICENSE
|   README.md
|   
+---client-side
|   |   .gitignore
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   
|   +---public
|   |       favicon.ico
|   |       index.html
|   |       robots.txt
|   |       
|   \---src
|       |   App.js
|       |   App.test.js
|       |   context.js
|       |   index.css
|       |   index.js
|       |   navigation.js
|       |   setupTests.js
|       |   
|       +---components
|       |   +---button
|       |   |       submit-button.js
|       |   |       submit-button.module.css
|       |   |       
|       |   +---chat
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---chat-part-of
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---footer
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---header
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---image-background
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---input
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---learn-more
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---link
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---loading
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---message
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---messages
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---my-chats
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---no-chats
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---page-layout
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---social-media
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   \---welcome
|       |           index.js
|       |           index.module.css
|       |           
|       +---images
|       |       about-photo.jpg
|       |       auth-home.jpg
|       |       change-password.jpg
|       |       info-photo.jpg
|       |       learn-more-photo.jpg
|       |       login.jpg
|       |       register-page.jpg
|       |       
|       +---pages
|       |   +---about
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---auth-home
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---chat-details
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---chats-part-of
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---create-chat
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---home
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---join-chat
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---login
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---profile
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---register
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   +---update-password
|       |   |       index.js
|       |   |       index.module.css
|       |   |       
|       |   \---update-profile-image
|       |           index.js
|       |           index.module.css
|       |           
|       \---utils
|               authenticate.js
|               change-user.js
|               chats.js
|               chatsPartOf.js
|               config.js
|               cookie.js
|               messages.js
|               navigation.js
|               
+---images
|       about-page.png
|       change-password-page.png
|       change-profile-image-page.png
|       chat-details-page.png
|       chats-part-of-page.png
|       create-chat-page.png
|       guest-home-page.png
|       home-loggedIn-user-page.jpg
|       join-chat-page.png
|       login-page.png
|       my-profile-page.png
|       register-page.png
|       
\---server-side
    |   .env
    |   .gitignore
    |   index.js
    |   package-lock.json
    |   package.json
    |   README.md
    |   
    +---config
    |       config.js
    |       database.js
    |       express.js
    |       routes.js
    |       
    +---controllers
    |       chat.js
    |       index.js
    |       message.js
    |       user.js
    |       
    +---models
    |       Chat.js
    |       index.js
    |       Message.js
    |       TokenBlacklist.js
    |       User.js
    |       
    +---routes
    |       chats.js
    |       index.js
    |       messages.js
    |       user.js
    |       
    \---utils
            auth.js
            index.js
            jwt.js
            
```


## Made by

[Antonio Hristov](https://github.com/tonyhristov)

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

## Images

## Home Pages

Guest Home

![guest home](https://github.com/tonyhristov/ChatIT/blob/master/images/guest-home-page.png)

Authenticated Home

![authenticated home](https://github.com/tonyhristov/ChatIT/blob/master/images/home-loggedIn-user-page.jpg)

## About Page

![about](https://github.com/tonyhristov/ChatIT/blob/master/images/about-page.png)

## Login Page

![login](https://github.com/tonyhristov/ChatIT/blob/master/images/login-page.png)

## Register Page

![register](https://github.com/tonyhristov/ChatIT/blob/master/images/register-page.png)

## My Profile Page

![my profile](https://github.com/tonyhristov/ChatIT/blob/master/images/my-profile-page.png)

## Change Password Page

![change password](https://github.com/tonyhristov/ChatIT/blob/master/images/change-password-page.png)

## Change Profile Image Page

![change profile image](https://github.com/tonyhristov/ChatIT/blob/master/images/change-profile-image-page.png)

## Create Chat Page

![create chat image](https://github.com/tonyhristov/ChatIT/blob/master/images/create-chat-page.png)

## Join Chat Page

![join chat image](https://github.com/tonyhristov/ChatIT/blob/master/images/join-chat-page.png)

## Chat Details Page

![chat details image](https://github.com/tonyhristov/ChatIT/blob/master/images/chat-details-page.png)

## Chat Part Of Page

![chat part of image](https://github.com/tonyhristov/ChatIT/blob/master/images/chats-part-of-page.png)