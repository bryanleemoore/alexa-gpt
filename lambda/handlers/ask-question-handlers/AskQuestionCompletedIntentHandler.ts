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
        const response = await API.getResponse(question)
        if (response instanceof Error) {
            return handlerInput.responseBuilder
                .speak('Sorry, there was a problem with the OpenAPI API. Please try again at a later time.')
                .withShouldEndSession(true)
                .getResponse();
        }
        const attributesManager = handlerInput.attributesManager;
        const attributes = await attributesManager.getPersistentAttributes();

        attributes.totalPromptTokensUsed += response.usage.prompt_tokens
        attributes.totalCompletionTokensUsed += response.usage.completion_tokens
        attributes.totalTokensUsed += response.usage.total_tokens

        attributesManager.setPersistentAttributes(attributes);
        await attributesManager.savePersistentAttributes();

        let speakOutput = response.choices[0].text
        return handlerInput.responseBuilder
            .speak(speakOutput + ' Would you like to ask another question?')
            .reprompt(speakOutput)
            .getResponse();

    }
};