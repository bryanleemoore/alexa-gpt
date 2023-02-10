import * as Alexa from 'ask-sdk-core'

export const AskQuestionCompletedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AskQuestionIntent'
            && handlerInput.requestEnvelope.request.intent.slots.question.value 
    },
    handle(handlerInput) {
        let question = handlerInput.requestEnvelope.request.intent.slots.question.value

        //TODO: API get chat gpt response 
        //const speakOutput = API.getAnswer(question) + ' Would you like to ask another question?'

        const speakOutput = handlerInput.requestEnvelope.request.intent.slots.question.value + ' Would you like to ask another question?'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};