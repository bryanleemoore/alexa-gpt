import * as Alexa from 'ask-sdk-core'

export const NameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'NameIntent'
    },
    async handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        let userName = handlerInput.requestEnvelope.request.intent.slots.name.value;
        let attributes = {
            'userName': userName,
            'questionsAsked': 0,
            'tokensUsed': 0
        };

        attributesManager.setPersistentAttributes(attributes);
        await attributesManager.savePersistentAttributes();

        const speakOutput = `Thanks, ${userName}. Would you like to ask me a question now?`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};