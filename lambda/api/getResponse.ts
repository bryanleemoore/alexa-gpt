import { openai } from '../'

const botTrainPrompt = "I am a highly intelligent question answering bot. "
    + "If you ask me a question that is rooted in truth, I will eloquently restate the question and give you the answer. "
    + "If you ask me a question that is nonsense, trickery, or has no clear answer, I will not restate the question and instead respond with "
    + "\"Sorry, I have no answer for that question.\".\n\nQ: "

export const getResponse = async (question) => {
    let params = {
        model: "text-davinci-003",
        prompt: botTrainPrompt + question + '\nA:',
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    }

    return await openai.createCompletion(params)
        .then((res) => {
            return res.data.choices[0].text
        })
        .catch((err) => {
            console.log('ERROR', err)
            return false;
        })
}
