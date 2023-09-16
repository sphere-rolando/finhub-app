import openai
from decouple import config
from retry import retry
import black

openai.api_key = config("OPENAI_API")


@retry(tries=3, delay=1, backoff=2)
def ask_gpt(prompt: str, max_tokens=100, temperature=0.3):
    answer_text = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=temperature,
        ).to_dict().get("choices")[0]["message"]["content"]
    return {
        "text": answer_text
    }
        
