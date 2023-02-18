const Alexa = require('ask-sdk-core');
const { OpenAIApi } = require("openai");
import { APIConfiguration } from "./api";
import { CancelAndStopIntentHandler, ErrorHandler, 
HelpIntentHandler, IntentReflectorHandler, 
LaunchRequestHandler, AskQuestionStartedIntentHandler, 
AskQuestionCompletedIntentHandler, SessionEndedRequestHandler, 
FallBackIntentHandler } from "./handlers";


export const openai = new OpenAIApi(APIConfiguration);

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        AskQuestionStartedIntentHandler,
        AskQuestionCompletedIntentHandler,
        CancelAndStopIntentHandler,
        FallBackIntentHandler,
        ErrorHandler,
        HelpIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, 
        ) 
    .lambda();
