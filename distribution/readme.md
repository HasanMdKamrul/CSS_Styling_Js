urlpattern+= static(settings.STATIC_URL, documents_root = settings.STATIC_ROOT)

# python manage.py collectstatic will collect all the files and store it in the STATIC_ROOT location 
# runserver command will run the static files from STATIC_ROOT
# After the python manage.py collectstatic command the STATIC_ROOT location will automatic created in the specific mark.
# STATICFILES_DIRS could be multiple in a list and collectstatic will gether all of them into static_root and then runserver will run them from there.

First commit:
Download the theme from ---> https://bootstrapious.com
After that --> sort it to the templates and static files static_in_env
settings.py --> configure it for the static files and media files also add the urls 
run the upper command
sort the head, header and footer introduced the base.html concept 
next run the html without django logic using templates views and urls 

Second commit:
nav bar urls added
index.html brains added using the new posts app views
make the tables post,author,catagory
for the featured option of the post use the featured = true form the post model
for the latest post to render use timestamp [0:3] --> 3 latest post
now for the newsletter --> in the index.html 
set action = . 
method = "POST"
create a new app called marketing with a signup model which has emial field 
if get the post method from html grab that email in the email field of the marketing app
import it in the posts views and if the request.method is POST
grab that email from the html form and store that into that signup email field of the database and save it. 

# WorkFlow ---> How Paginator works
When a user request a page the url will look like this www.facebook.com/?page=3
So when a user hit for the any page ---> that give us a page number 
Then we take that page and according to that page we just render our Querysets

#Workflow-->2 
Added the recent tab in the blog.html also added the fuctionality if we click on the each post ---> Which will render the post-detail according to it's pk=id. 

#Workflow-->3
What I did here, I first write a function where I grab all the posts catagories and I count the number of times the 1 catagory appeard in all the posts 
I saved the catagories__title as key and also catagories__title_count as the key 
I returened the queryset and then I passed that into the context in our blog function.

#Search_Functionality
What I did here, from the html search field(text) I got the the thing the user searched store it in q
Then in my view I grabbed that with request.GET.get('q')
After that I get all the posts from db
Next to that if what user searched is available in the fields(title,overview(I used to search these 2 fields)) of the whole db. I retured the queryset
Send it to the context and render the search result 
give the link of the post (result) which was requested by the user.

