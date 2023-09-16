import finnhub
from decouple import config

finnhub_client = finnhub.Client(
    api_key=config("FINNHUB_API_KEY")
)
finnhub_client.DEFAULT_TIMEOUT = 60

def get_news(limit: int = 0):
    news =  finnhub_client.general_news('general')[:limit]
    return news

