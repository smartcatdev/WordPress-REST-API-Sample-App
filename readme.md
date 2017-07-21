## WordPress REST API Demo Application

This small project shows how to use JavaScript to retrieve data from a WordPress site using
the REST API.

Before loading index.html, open `includes/app/main.js` and edit the REST_URL constant value to your own site
your URL should be the homepage URL of your WordPress site followed by wp-json
`http://yoursite.com/wp-json/`

This project uses mustache.js for templating the output. This is not necessary, as you can choose to print the response
directly from the `.done()` method of the request