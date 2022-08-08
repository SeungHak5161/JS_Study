## HTTP Request

- 200 - it crawls and parses the HTML.(정상)
- 30X - it follows the redirects.(리다이렉트)
- 40X - it will note the error and not load the HTML
  - 404 : 요청된 리소스가 없음
  - 410 : 요청된 리소스가 유효하지 않아짐(ex> 게시글 삭제, 상품 판매 종료 등)
- 50X - it may come back later to check if the status code has changed.(서비스 불가능)
  - 503 : 서비스의 과부하 등의 이유로 요청 처리 불가능

## robots.txt

- 크롤러가 사이트에 액세스 할 수 있는, 없는 URL을 크롤러에게 알려줌

## XML Sitemaps

- 구글이 웹사이트를 쉽고 정확하게 탐지 및 크롤링 할 수 있게 해줌
