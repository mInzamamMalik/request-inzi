## A simple library for making get and post request
this lib target small applications in which you barely make few requests, or too many simple and similar requests, like google assistant and dialogflow webhook
this is designed for hands on plug and play simple use cases

### Install:
`npm i request-inzi`


### Available functions:


- `get(url:String, queryParameter:Object)`

    - **url**: String (required)
    - **queryParameter**: Object (optional)


- `post(url: string, jsonBody:Object, headers:Object)`
    - **url**: String  (required)
    - **jsonBody**: Object (required) (provide empty object if you must provide empty object)
    - **header**: Object (optional) (no need to provide header if you are sending JSON body)

- `put` - scheduled in near future
- `delete` - scheduled in near future

### ES6 example:
```javascript
import { http } from 'request-inzi';

http.get(`https://example.com/api`, {"query-parameter": "some-value" })
    .then((response) => {
        console.log("api response: ", response)
    })
    .catch(e => {
        console.log("error calling http: ", e);
    })
```

### Report issues & Contribute:

if you have any issue to report please feel free to open new issues, you may scroll existing issues to find out solutions
pull request from you friends are most welcome in advance, feel free to **fork > modify > pull request**  



Best of Luck <br>
**Mohammad Inzamam Malik** <br>
Chatbot and voice app pro <br>
*https://voiceapp.pro/*
