import OpenAI from "openai";
import fs from "fs";

const sysPrompt = fs.readFileSync('prompt.txt', 'utf8')

const openai = new OpenAI();
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    store: true,
    messages: [
        {"role": "system", "content": sysPrompt},
        {"role": "user", "content": "suci menggunakan handphone apa?"},
    ]
});
console.log(completion.choices[0].message)
