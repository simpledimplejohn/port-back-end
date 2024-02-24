# PORT-BACK-END
This project is a lightwieght full stack application that allows testing of port configurations on servers by sending simple messages back and forth.

## Outline
- Connects to port-front-end

## Steps
- Test and run locally
- Test and run with docker
- Test and run on an EC2
- ADD logging

## Setting Up Node
`npm init -y`
`npm install express`
`npm install moment`
To Run:
`node server.js`
To Stop:
(Ctrl + C)

## Commands to access the endpoint:
`curl -X POST -H "Content-Type: application/json" -d '{"word":"potato"}' http://localhost:3000/log`

- Using Postman (GUI Tool):
    Open Postman.
    Set the request type to POST.
    Enter the URL http://localhost:3000/log.
    Select the "Body" tab.
    Choose "raw" and set the content type to "JSON".
    Enter `{"word":"potato"}` in the request body.
    Click "Send" to make the request.