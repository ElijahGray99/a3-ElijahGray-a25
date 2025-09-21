This website is designed to help you priortize what assignments you should
complete first by ordering them by "stress score." This website supports
account creation, logging in, logging out, and user associated persistent data.

Form types used: Date, number, and text.

The website was challenging in several ways:
1 - beginning to use middleware and express together.
2 - creating a database and linking it to my express project.
3 - making user accounts schemas and associating them with homework schemas almost like a relational database.
4 - making the website look good and accessible.

The authentication strategy I chose was using cookies with "Cookie-session" to authorize a login and whether they should be able to access data.
I also make sure the user's cookie matches the user that can access certain data. This way a user cannot access
another user's data.

The CSS framework I chose was bootstrap because it was easy and easy to find examples/templates to follow/get inspiration from.

The middleware I used:
Cookie-session - provides a way to interface with cookies.
logger - Logs each request (e.g) GET and other info if possible.
Check_login - protects sensitive information by making sure the client is logged in.
express.static, express.json - format data for usage.



WARNING: accounts are not locally stored in the server files but in the mongodb database so you MUST have a mongodb database connected or the server
will not work.

To login, please create an account using the registration page or use some of my premade account for my database:
{user: test1, password: 123}
{user: test2, password: 123}
{user: test3, password: 123}

If you would like access to my database, please email me at egray1@wpi.edu and I will send you my mongodb .env details.

MongoDB setup instructions:
After you make an account on mongoDB, go to the Mongoose section and create a cluster.
Afer creating a cluster, 
go to database --> clusters --> click connect --> drivers at the top --> driver --> Mongoose
--> scroll down slightly and some Node.js code will be generated with a URI for you to use.

Look toward the top and you will see the line:
const uri = "mongodb+srv://MONGO_USER:<db_password>@MONGO_HOST/MONGO_OPTIONS";

Take components of this URL and use them in my .env file.

The password will be the associated cluster's password. If you forget your password, head to Security --> databse access and select your cluster.
You can change the password there.

No quotes needed.
.env file format:

MONGO_USER=
MONGO_PASS=
MONGO_HOST=
MONGO_OPTIONS=?


Deployed locally, on render, and on vercel.com.
Render: https://a3-elijahgray-a25.onrender.com/
Vercel: https://a3-elijah-gray-a25-va7c.vercel.app/


Technical Achievements:

Deployed on another website [suggested achivement].
I was able to deploy my website not just on Render, but also on Vercel.com. I think my design is fairly good so it didn't take much to do this.
The only hiccup was my previous usage of Mime causing a problem with this website, to solve this I simply removed the dependency from the project.
(5 points)

Got 100 on Google Lighthouse on parts of my website [Suggested achivement].
I used the chrome extension with google lighthouse to scan all the pages of my website and made adjustments based on its advice. I attached a screenshot
with all 3 pages and the 100 from google.
(5 points)

https://a3-elijah-gray-a25-va7c.vercel.app/

[personally suggested achivement]
Although not required, I added a registration page that can be used to create new accounts that will automatically be associated with data in the database.
There are no "dummy" accounts for my current implementation. I think it was a fairly big learning experience to get the hang of cookies. 
Premade accounts made: "test1", password: "123",  "test2", password = "123"... etc. I think my current first approach might be slightly questionable a
s I still have much to learn. I also added a middleware to test if the user is even logged in when trying to get server data. I also made it so if the user was logged in already,
they will be automatically redirected to the content page. I ran into alot of hiccups when trying to do this part of the assignment. My current approach for
logging out is clearing the cookie and redirecting them to the login page. I would like to have atleast 5 points if possible please.
(5 - 10 points)

[personally suggested achivement]
Made use of a rendering system known as "ejs". Instead of using html files saved locally, my server is sending the client data for them to render.
My friend told me this approach is much better for larger websites so I thought it would be good practice to try. Moreover, I saw this used on an example
website GeeksforGeeks (https://www.geeksforgeeks.org/node-js/login-authentication-using-express-js-passport-js-and-bcrypt/). And wanted to give it a try.
I also tried making it so I can send variables like the username so when the person logs in they can see their name being greeted. Instead of being stored as
html my "html" is stored in the views folder in ejs files. I think this really helped me feel comfortable making package.jsons as well as a side benefit.
I would like atleast 5 points if possible please.
(5 points)

Design Achivements: 

[personally suggested achivement]
Used feedback from my family to improve the "look" of my website. They didn't really like my first approach (which wasnt uploaded to github)
and told me to try again. Their suggestions included things such as shadows, "to be more like google," and said to make the buttons further appart and bigger. They also thought 
it be nice to have a logout feature, which I did add. I think this was slightly challenging because I am not very good at graphic design.
I think what I have presented is alot better than before and more than the bare minimum in terms of design.
(5 points if possible,  please).

Note on AI usage: AI tools (ChatGPT, Gemini) were used 
to explore layout and styling ideas. I was unhappy with my visual looks when I tried using it iniaily.
I referenced some of their suggested HTML and Bootstrap class suggestions, but adapted them to my own approach and made 
adjustments where the AI’s suggestions were imperfect. The final 
implementation reflects my own design choices. Moreover, AI was used to help debug
some annoying errors I had with my network and routing between pages. I used an app called
Prettyify to make my html cleaner and more readable.
