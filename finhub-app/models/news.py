import finnhub
from decouple import config
from transformers import AutoModelForSequenceClassification, AutoTokenizer

finnhub_client = finnhub.Client(
    api_key=config("FINNHUB_API_KEY")
)
finnhub_client.DEFAULT_TIMEOUT = 60

model_id = "Sigma/financial-sentiment-analysis"
tokenizer = AutoTokenizer.from_pretrained(model_id)

model = AutoModelForSequenceClassification.from_pretrained(model_id)

def get_news(limit: int = 10):
    news =  finnhub_client.general_news('general')[:limit]
    for article in news:
        article["sentiment"] = bert_sentiment(article["headline"])
    return news

def bert_sentiment(headline):
    inputs = tokenizer(headline, return_tensors="pt")
    outputs = model(**inputs)
    logits = outputs.logits
    class_id = logits.argmax().item()
    label = model.config.id2label[class_id]
    if label == "LABEL_0":  # negative
        return -1
    if label == "LABEL_1":  # neutral
        return 0
    if label == "LABEL_2":  # positive
        return 1