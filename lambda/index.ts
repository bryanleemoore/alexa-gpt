const Alexa = require('ask-sdk-core');
const { OpenAIApi } = require("openai");
import { APIConfiguration } from "./api";
import { CancelAndStopIntentHandler, ErrorHandler,
HelloWorldIntentHandler, HelpIntentHandler,
IntentReflectorHandler, LaunchRequestHandler,
AskQuestionStartedIntentHandler, AskQuestionCompletedIntentHandler,
SessionEndedRequestHandler, FallBackIntentHandler } from "./handlers";


export const openai = new OpenAIApi(APIConfiguration);

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AskQuestionStartedIntentHandler,
        AskQuestionCompletedIntentHandler,
        CancelAndStopIntentHandler,
        FallBackIntentHandler,
        ErrorHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, 
        ) 
    .lambda();
