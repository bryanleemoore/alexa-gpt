const Alexa = require('ask-sdk-core');
import * as AWS from "aws-sdk"
import { DynamoDbPersistenceAdapter } from "ask-sdk-dynamodb-persistence-adapter";
import { OpenAIApi } from "openai";
import { APIConfiguration } from "./api";
import {
    CancelAndStopIntentHandler, ErrorHandler,
HelpIntentHandler, IntentReflectorHandler, 
    AskQuestionStartedIntentHandler, AskQuestionCompletedIntentHandler,
    SessionEndedRequestHandler, FallBackIntentHandler,
    NameIntentHandler, LaunchRequestHandler
} from "./handlers";

export const openai = new OpenAIApi(APIConfiguration);

const persistenceAdapter = new DynamoDbPersistenceAdapter({
    tableName: 'alexa-gpt',
    createTable: true,
    dynamoDBClient: new AWS.DynamoDB({ apiVersion: 'latest', region: 'us-east-1' })
});

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NameIntentHandler,
        AskQuestionStartedIntentHandler,
        AskQuestionCompletedIntentHandler,
        CancelAndStopIntentHandler,
        FallBackIntentHandler,
        ErrorHandler,
        HelpIntentHandler,
        IntentReflectorHandler, 
        ) 
    .withPersistenceAdapter(persistenceAdapter)
    .lambda();
