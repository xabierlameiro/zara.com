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
- [ ] Clean urls, without using #
- [ ] The use of any JS/CSS library is allowed except AngularJS and Ember

Main requirements:
=============
- [ ] 3 views: HomePage, Podcast detail, Details of a podcast episode
- [ ] The design of the views must be respected 
- [ ] The application must be a single page application.
- [ ] It has to be in development and production mode
- [x] Final code on GitHub
- [x] Gradually upload the code differentiating achievements with tags.
- [x] You must have a README document explaining the commands.

Header requirements:
====================
- [ ] The title is a link to the home page.
- [ ] Each time a navigation is made, a mark will be displayed in the top right-hand corner.

Home Page requirements:
=======================
- [ ] Route /
- [ ] List of the 100 most popular podcasts as listed by Apple.
- [ ] Once the list is obtained it is cached for 1 day.
- [ ] The user can filter by text, the list by title of the podcast and author name.
- [ ] The filtering should be immediate so that when the user presses any key.
- [ ] When the user clicks on a podcast he/she will go to the podcast detail page.

Podcast detail requirements:
============================
- [ ] Route /podcast/:podcastId
- [ ] The view have a sidebar should be displayed with the image of the podcast,title, author and description.
- [ ] The view have a main section with nº of episodes and a list of episodes with title, date and duration.
- [ ] Once the list is obtained it is cached for 1 day like the home page.
- [ ] When the user clicks on an episode he/she will go to the episode detail page.

Episode detail requirements:
============================
- [ ] Route /podcast/:podcastId/episode/:episodeId
- [ ] The view have same sidebar as the podcast detail page.
- [ ] The view have a main section with the title of episode, date, description and audio player.
- [ ] Episode descriptions contain HTML and this must be rendered (not escaped).

