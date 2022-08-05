## HTTP Request

- 200 - it crawls and parses the HTML.
- 30X - it follows the redirects.
- 40X - it will note the error and not load the HTML
- 50X - it may come back later to check if the status code has changed.
