import * as Alexa from 'ask-sdk-core'
import * as API from '../../api'

export const AskQuestionCompletedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AskQuestionIntent'
            && handlerInput.requestEnvelope.request.intent.slots.question.value
    },
    async handle(handlerInput) {
        let question = handlerInput.requestEnvelope.request.intent.slots.question.value

        const speakOutput = await API.getResponse(question)
        if (speakOutput === false) {
            return handlerInput.responseBuilder
                .speak('Sorry, there was a problem with OpenAPI. Please try again at a later time.')
                .withShouldEndSession(true)
                .getResponse();
        }
        return handlerInput.responseBuilder
            .speak(speakOutput + ' Would you like to ask another question?')
            .reprompt(speakOutput)
            .getResponse();
    }
};