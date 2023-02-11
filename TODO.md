Allowed points:
===============
- ES2020
- Webpack or Parcel
- Just Desktop View for Google Chrome
- No error handling is needed, only console.logs

Resources:
==========
- HomePage endpoint : https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
- Podcast detail endpoint : https:// itunes.apple.com/lookup?id={​podcastId}

Restrictions:
=============
- [x] Clean urls, without using #
- [x] The use of any JS/CSS library is allowed except AngularJS and Ember

Main requirements:
=============
- [x] 3 views: HomePage, Podcast detail, Details of a podcast episode
- [ ] The design of the views must be respected 
- [x] The application must be a single page application.
- [x] It has to be in development and production mode
- [x] Final code on GitHub
- [x] Gradually upload the code differentiating achievements with tags.
- [x] You must have a README document explaining the commands.

Header requirements:
====================
- [x] The title is a link to the home page.
- [x] Each time a navigation is made, a mark will be displayed in the top right-hand corner.

![Header screenshot](/public/Header.png)

Home Page requirements:
=======================
- [x] Route /
- [x] List of the 100 most popular podcasts as listed by Apple.
- [x] Once the list is obtained it is cached for 1 day.
- [ ] The user can filter by text, the list by title of the podcast and author name.
- [ ] The filtering should be immediate so that when the user presses any key.
- [ ] When the user clicks on a podcast he/she will go to the podcast detail page.

![Home page screenshot](/public/Home-page.png)

Podcast detail requirements:
============================
- [x] Route /podcast/:podcastId
- [ ] The view have a sidebar should be displayed with the image of the podcast,title, author and description.
- [ ] The view have a main section with nº of episodes and a list of episodes with title, date and duration.
- [x] Once the list is obtained it is cached for 1 day like the home page.
- [ ] When the user clicks on an episode he/she will go to the episode detail page.

![Podcast detail page screenshot](/public/Podcast-detail.png)


Episode detail requirements:
============================
- [x] Route /podcast/:podcastId/episode/:episodeId
- [ ] The view have same sidebar as the podcast detail page.
- [ ] The view have a main section with the title of episode, date, description and audio player.
- [ ] Episode descriptions contain HTML and this must be rendered (not escaped).

![Episode detail page screenshot](/public/Episode-detail.png)
