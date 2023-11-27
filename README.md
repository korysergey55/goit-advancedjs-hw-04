Task. Image search

- Create the front-end part of the application for searching and viewing images
  by keyword.
- The form is initially contained in an HTML document. The user will enter a
  search string in the text field, and after submitting the form, an HTTP
  request must be performed.
- For the backend, use the public API of the Pixabay service. Register, get your
  unique access key and read the documentation.
- If the backend returns an empty array, then nothing suitable was found. In
  this case, show a message with the text "Sorry, there are no images matching
  your search query. Please try again.". For notifications, use the notiflix
  library.

Pagination

- Make it so that 40 objects come in each answer (20 by default).
- In the initial state, the button should be hidden. After the first request,
  the button appears in the interface under the gallery. When resubmitting the
  form, the button is first hidden, and after the request is displayed again.
- If the user has reached the end of the collection, hide the button and display
  a message with the text "We're sorry, but you've reached the end of search
  results."

Additionally

- After the first request, with each new search, receive a message in which it
  will be written how many images were found (totalHits property). Message
  text - "Hooray! We found totalHits images."
- Add display of a large version of the image with the SimpleLightbox library
  for a full gallery.
- Make smooth scrolling of the page after requesting and rendering each
  subsequent group of images
- Instead of the "Load more" button, you can make endless loading of images
  while scrolling the page. We give you full freedom of action in
  implementation, you can use any libraries
