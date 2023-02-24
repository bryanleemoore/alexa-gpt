import * as Alexa from 'ask-sdk-core'

export const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    },
    async handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const persistentAttributes = await attributesManager.getPersistentAttributes();
        let userName = persistentAttributes.userName;

        if (typeof userName === 'undefined') {
            const speakOutput = `Welcome to AlexaGPT, lets get started by getting your name. What is your first name?`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .withShouldEndSession(false)
                .getResponse();
        }
        else {
            const speakOutput = `Welcome back to AlexaGPT, ${userName}! Would you like to ask me a question?`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .withShouldEndSession(false)
                .getResponse();
        }
    }
};