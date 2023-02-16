const Alexa = require('ask-sdk-core');
import { CancelAndStopIntentHandler, ErrorHandler,
HelloWorldIntentHandler, HelpIntentHandler,
IntentReflectorHandler, LaunchRequestHandler,
AskQuestionStartedIntentHandler, AskQuestionCompletedIntentHandler,
SessionEndedRequestHandler, FallBackIntentHandler } from "./handlers";



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
