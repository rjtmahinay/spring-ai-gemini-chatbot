# Gemini Chatbot using Spring AI
This is a chatbot presented during my talk in Google I/O Extended Manila 2024.

## Session Title
Java in AI: Implementation of Google Vertex AI using Spring AI and Hilla

## Dynamic Diagram

![Gemini Chatbot Dynamic Diagram](misc/gemini-chatbot.png)

### Sequence

<ol>
    <li>User send credentials via Google Cloud Shell</li>
    <li>Google Cloud Shell respond back if the authentication is successful</li>
    <li>User send a message</li>
    <li>Chatbot verifies if it can connect to user's Google Cloud project</li>
    <li>Return the verification result</li>
    <li>Call the Chat endpoint</li>
    <li>Call the Chat API of Google Cloud via HTTP</li>
    <li>Google Cloud Java Chat API uses Gemini Model</li>
    <li>Gemini Model responds back based on the user message</li>
    <li>Google Cloud Java SDK return the model response via HTTP</li>
    <li>Spring AI return the model response with modification (if any, based on business logic)</li>
    <li>The Chatbot shows the message</li>
</ol>

# Running locally

* Install Google Cloud CLI to authenticate locally: [Google Cloud CLI Authentication](https://cloud.google.com/docs/authentication/gcloud#local)
* Replace Google Project ID in [application.yml](src/main/resources/application.yml)
* Run <em>gradlew bootRun</em>
