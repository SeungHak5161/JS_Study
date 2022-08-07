## HTTP Request

- 200 - it crawls and parses the HTML.
- 30X - it follows the redirects.
- 40X - it will note the error and not load the HTML
  - 404 : 요청된 리소스가 없음
  - 410 : 요청된 리소스가 유효하지 않아짐
- 50X - it may come back later to check if the status code has changed.
