import { ElevenLabsClient, stream } from 'elevenlabs';
import { Readable } from 'stream';

const client = new ElevenLabsClient();

async function main() {
const apiKey = process.env.ELEVENLABS_KEY;
const audioStream = await client.textToSpeech.convertAsStream(apiKey, {
    text: 'This is a test',
    model_id: 'eleven_multilingual_v2',
});

  await stream(Readable.from(audioStream));

  for await (const chunk of audioStream) {
    console.log(chunk);
  }
}

main();
