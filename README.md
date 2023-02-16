# alexa-gpt
Description: An Alexa Skill that uses Chat GPT to answer your questions.

---------
**TODO:**
- Implement Chat GPT API
     - Right now, only use OpenAI 'text-davinci' model until the new ChatGPT API is released
- Set up DynamoDB through the DynamoDBPersistence adapter:
     - To keep track the number of questions the user asked (and possibly implement question limit due to API cost?)
     - To remember users name upon start up to greet them
- Look into ways to allow users to use their own OpenAI account
