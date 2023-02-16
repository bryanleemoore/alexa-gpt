# alexa-gpt
Description: An Alexa Skill that uses Chat GPT to answer your questions.

Currently, due to the official ChatGPT API not yet released, this Alexa Skill uses the 'text-davinci' model from OpenAI in order to complete and respond to the user's question.

---------
**TODO:**
- Set up DynamoDB through the DynamoDBPersistence adapter:
     - To keep track the number of questions the user asked (and possibly implement question limit due to API cost?)
     - To remember users name upon start up to greet them
- Look into ways to allow users to use their own OpenAI account
