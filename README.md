**CS1534 Assessment 3 - HTML and CSS (and JS) for hometown tourist hobby website**
Name: Fraser McCarter
Student ID: 52208648

- Design Rationale -

- Banner -
I chose to use a large banner that takes up the full height of the screen as it allows the website to show off the main attractions of North Berwick, its views and scenic location clearly and straight away, showing the visitor what North Berwick is like.  The images chosen are related to the town and what the page represents, in the case of the history page it shows an old photo of the high street, helping immerse the viewer/user in the history of the town.  Each page also has a quote that summarises the purpose/focus of the page and acts as a slogan.

- Navigation -
I chose to use Bootstrap's built-in nav as it is easy to implement/edit.  Some edits I made include:
  - font/font size/font colour, I chose white as it contrasts well with the blues and greens of the banner images and the font is one I have used on previous websites and like the     look of it.  By using fonts from the same family across the page I can maintain a cohesive styling.
  - Transparent background, this lets the banner image remain clear and show through the nav giving the page a more modern feel.
  - Floating nav, I chose this as it draws the user's eyes to it much more easily than if it was stuck against the top of the page and generally gives a more modern look to the        page.
There are also some differences between the mobile view and desktop view for the page, the desktop view makes use of underlines to show what the current page is and what is the hovered page.  I wanted to step away from Bootstrap's defaults as these don't look so modern or sleek by comparison.  I also hid the Instagram logo/link from the mobile view as it just made the page cluttered and can be found at the bottom of the page in the footer anyhow.  Creating the underline using pseudo-elements was by far one of the hardest parts of making the website and took a lot of time and tweaking to implement, one of the main issues was making it stay on the current/active page, I found I was able to use the :not() element in conjunction with the .active class to make the width 0 for the pseudo-elements without the .active class.  This is something I have used in other websites so was not an endeavour taken on from scratch but still took a lot of effort in order to make it work with Bootstrap.  For the nav-brand I made a quick PNG vector drawing of the Bass Rock, a staple of North Berwick, this could easily be changed to the client's liking as the size of the image is fixed so it will work with any image and maintain its aspect ratio.

- index.html -
This page features a large quote in the banner as well as the founding year of the town.  Below this is some small snippets of the main features/landmarks of the town with some accompanying images.  I used Bootrap's flex containers and cards for this but removed the borders and radii from them as I feel in this instance that images having a border around them are very outdated and not in tune with modern website design.  I split up this 6:6-row ratio with a full-width quote at the bottom to subconsciously signify an end to this layout before the open street map.  I chose to make this a dropdown utilising Bootstrap's button and dropdown classes to allow the user to choose if they want the map to be displayed as it takes up a large portion of the screen.  I used some simple JavaScript to apply a CSS class to the icon in the button that rotates it 180 degrees with a slower transition speed to indicate whether the dropdown is open or not.

- visit.html -
The visit page has a similar layout to the home page (index.html) featuring the same nav, banner and quote placement with simple changes to the quote text and banner image.  This maintains consistency across the website and helps the user understand the site layout and reduces the chances of getting lost.  The visit page again makes use of Bootstrap's flex containers and a 7:5 ratio as specified in the brief (I did take some liberty in this by also using a 5:7 ratio in conjunction, this provides some movement to the page and helps differentiate sections).  The colours chosen for the background colours of the cards were picked using a colour-picking tool and picking colours from the banner images, this again helps separate the activities from one another.  I did make use of the border and border radii this time as they lift the cards from the background helping them stand out.  This page, much like the home page, contains external hyperlinks to relevant pages where users can find more info on certain topics/activities.  The hardest thing to implement on this page was proper margins, as there are two cards per flex container row each, with margins, there was a double thickness margin in the middle as left cards right margin + right cards left margin = double margin.  This is usually a simple fix, you can use CSS on the last child of the flex container to remove its left margin; though this doesn't work for the mobile view as the cards are stacked vertically instead of horizontally which means if we apply this last child rule when they are stacked vertically the last card will touch the edge of the screen instead of maintaining its margin.  To fix this I again only applied the last child rule when the screen size is big enough to fit the cards next to each other horizontally.

- history.html -
This page again is similar to the previous two, this time with full-width flex containers for its information, the cards use the same colours that can be found on the visit page creating cohesion across these pages.  ALL CARD TEXT CONTENT ON THIS PAGE HAS BEEN TAKEN FROM THE NORTH BERWICK WIKIPEDIA WITH MINIMAL EDITING.

- Footer -
The footer again makes use of Bootstrap's classes, for this, I made the text light-grey instead of white as the footer shouldn't stand out in the pages as it is not the primary focus of the page.  I made use of margins and border radii to give it a 'floating look', this gives it a more modern feel.

- Assessment Structure -
I have structured the files based on my previous knowledge of HTML practises, each page has its own CSS and also a global one, this not only lets you see what properties apply to each page but also reduces repeated code across the pages.

- JavaScript -
I have made use of relatively simple JavaScript in this assignment, one to set the visibility of the scrollwheel, which is visible when the user is at the top of the screen, and another to rotate the dropdown icon.  As the main focus of this assignment is HTML and CSS I have kept my use of JS to a minimum only using it in conjunction with CSS stylings and not doing anything other than adjusting stylings.

- Icons -
For icons, I made use of fontawesome's icon kit which reduces the amount of PNG images needed to be stored locally and ensures consistency in icon thickness and styling.  These icons are easy to implement and use.


- Sources -
Websites:
- https://en.wikipedia.org/wiki/North_Berwick
- https://en.wikipedia.org/wiki/Tantallon_Castle
- https://www.northberwickgolfclub.com
- https://www.historicenvironment.scot/visit-a-place/places/tantallon-castle/
- https://www.herringbone-northberwick.co.uk
- https://www.rocketeerrestaurant.co.uk
- https://www.seabird.org
- https://www.beachwheelchairs.org
- https://www.glengolfclub.co.uk
- https://johnmuirway.org
- https://www.facebook.com/groups/111524985572/
- https://twitter.com/VisNorthBerwick
- https://www.instagram.com/explore/locations/220654725/north-berwick/

Images:
- https://media.timeout.com/images/105571898/image.jpg
- https://2f1a7f9478.visitscotland.net/wsimgs/visitscotland_33264978229_694618068.jpg
- https://lh5.googleusercontent.com/ULc-2DSWX2RkgLOFxt23HWtTI1SeanhhfQ8oXAXpeKM3QHb8qg71gTNia0Z-xebKjk4w0JhIDvbrHC69nt-C1FTLwIZoV6_rJQ90KzelaF7qeVJAPNrCU0fzHlR9kF8wxUE1b8i5mh7ZCpsgpEqm1WI
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitscotland.com%2Finfo%2Ftowns-villages%2Fnorth-berwick-p240511&psig=AOvVaw3joYi5neDitE4h2VR6pKnK&ust=1709568708256000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC-8u692IQDFQAAAAAdAAAAABAJ
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airbnb.co.uk%2Fnorth-berwick-united-kingdom%2Fstays%2Fhouses&psig=AOvVaw3joYi5neDitE4h2VR6pKnK&ust=1709568708256000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC-8u692IQDFQAAAAAdAAAAABAT
- https://images.squarespace-cdn.com/content/v1/61891dc507767666614c6025/1683633503628-KQPB6U7ELRNCX8L55FAP/northberwick-biarritz-north.jpg
- https://www.openstreetmap.org/#map=15/56.0557/-2.7241
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F7430965%40N05%2F49779220333&psig=AOvVaw0ECe5D2tjqcs1FgLZK38eN&ust=1709640066930000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODp69nH2oQDFQAAAAAdAAAAABAJ
- https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.northberwick.org.uk%2Fpix57.html&psig=AOvVaw2jIiCZ7BFBax7Vz9eGKuSi&ust=1709577822386000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCNqOjf2IQDFQAAAAAdAAAAABAg

Scripts:
- https://kit.fontawesome.com/fd4c78af1d.js
- https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
- https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js
- https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js
