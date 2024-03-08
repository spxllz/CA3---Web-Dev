CS1534 Assessment 3 - HTML and CSS (and JS) for hometown tourist hobby website

- Design Rationale -

- Banner -
I chose to use a large banner that takes up the full height of the screen as it allows the website to show off the main attractions of North Berwick, its views and scenic location clearly and straight away, showing the visitor what North Berwick is like.  The images chosen are related to the town and what the page represents, in the case of the history page it shows an old photo of the high street, helping immerse the viewer in the history of the town.  Each page also has a quote that somewhat summarises the purpose/focus of the page.

- Navigation -
I chose to use Bootstrap's built-in nav as it is easy to implement/edit.  Some edits I made include:
  - font/font size/font colour, I chose white as it contrasts well with the blues and greens of the banner images and the font is one I have used on previous websites and like the     look of.
  - Transparent background, this lets the banner image remain clear giving the page a more modern feel.
  - Floating nav, I chose this as it draws the user's eyes to it much more easily than if it was stuck against the top of the page and generally gives a more modern look to the        page.
There are also some differences between the mobile view and desktop view for the page, the desktop view makes use of underlines to show what the current page is and what is the hovered page.  I wanted to step away from Bootstrap's defaults as these don't look so modern or sleek by comparison.  I also hid the Instagram logo/link from the mobile view as it just made the page cluttered and can be found at the bottom of the page in the footer anyhow.  Creating the underline using pseudo-elements was by far one of the hardest parts of making the website and took a lot of time and tweaking to implement, one of the main issues was making it stay on the current/active page, I found I was able to use the :not() element in conjunction with the .active class to make the width 0 for the pseudo-elements without the .active class.  This is something I have used in other websites so was not an endeavour taken on from scratch but still took a lot of effort in order to make it work with Bootstrap.  For the nav-brand I made a quick PNG vector drawing of the Bass Rock, a staple of North Berwick, this could easily be changed to the client's liking as the size of the image is fixed so it will work with any image and maintain its aspect ratio.

- index.html -
This page features a large quote in the banner as well as the founding year of the town.  Below this is some small snippets of the main features/landmarks of the town with some accompanying images.  I used Bootrap's flex containers and cards for this but removed the borders and radii from them as I feel in this instance that images having a border around them are very outdated and not in tune with modern website design.  I split up this 6:6-row ratio with a full-width quote at the bottom to subconsciously signify an end to this layout before the open street map.  I chose to make this a dropdown utilising Bootstrap's button and dropdown classes to allow the user to choose if they want the map to be displayed as it takes up a large portion of the screen.

- visit.html -
