import * as Alexa from 'ask-sdk-core'

export const AskQuestionStartedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AskQuestionIntent'
            && !handlerInput.requestEnvelope.request.intent.slots.question.value
    },
    handle(handlerInput) {
        const speakOutput = 'What do you want to ask?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addElicitSlotDirective('question')
            .getResponse();
    }
};





