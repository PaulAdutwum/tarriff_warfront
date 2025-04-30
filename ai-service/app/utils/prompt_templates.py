"""
Prompt templates for various AI tasks in the Tariff War application.
"""

def get_news_summarization_prompt(article, max_length=200):
    """
    Generate a prompt for summarizing news articles about tariffs.
    
    Args:
        article (dict): The news article containing title, content, source, etc.
        max_length (int): Maximum length of the summary in characters
        
    Returns:
        str: The formatted prompt for the LLM
    """
    return f"""
You are an expert analyst specializing in international trade, tariffs, and economic policy.
Summarize the following news article about tariffs or international trade in a concise, informative manner.

Article Title: {article['title']}
Source: {article['source']}
Date: {article['published_date']}
Content: {article['content']}

Provide a summary that:
1. Captures the key facts and developments in {max_length} characters or less
2. Highlights specific tariff rates, affected countries, and sectors when mentioned
3. Notes potential economic impacts mentioned in the article
4. Maintains a neutral, analytical tone

Then, identify the sentiment of the article (positive, negative, or neutral) regarding the tariff situation.

Finally, extract 3-5 key points from the article that would be most relevant to economic analysts.

Format your response as follows:
SUMMARY: [Your concise summary here]
SENTIMENT: [positive/negative/neutral]
KEY_POINTS:
- [First key point]
- [Second key point]
- [And so on...]
"""

def get_impact_prediction_prompt(data):
    """
    Generate a prompt for predicting the economic impact of tariffs.
    
    Args:
        data (dict): Contains tariff information and historical data
        
    Returns:
        str: The formatted prompt for the LLM
    """
    return f"""
You are an expert economic analyst with deep expertise in predicting the effects of trade policies and tariffs.
Analyze the following tariff situation and predict its economic impact.

Tariff Details:
- Source Country: {data['country_from']}
- Target Country: {data['country_to']}
- Sector: {data['sector']}
- Tariff Rate: {data['tariff_rate']}%

Historical Context:
{format_historical_data(data.get('historical_data', {}))}

Based on this information, provide a comprehensive analysis of the likely economic impacts, including:

1. GDP Impact: Expected percentage change in GDP for both countries
2. Trade Volume: Predicted changes in import/export volumes
3. Price Effects: Likely changes in consumer and producer price indices
4. Employment Impact: Potential job gains or losses in affected sectors
5. Confidence Score: Your confidence level in these predictions (0-1)

Also provide a concise explanation of your reasoning, considering factors such as:
- Substitution effects
- Supply chain disruptions
- Retaliatory measures
- Consumer behavior changes
- Historical precedents

Format your response as a structured JSON with numeric predictions and analysis.
"""

def get_recommendation_prompt(data):
    """
    Generate a prompt for creating recommendations based on tariff situations.
    
    Args:
        data (dict): Contains sector, country, and current tariffs information
        
    Returns:
        str: The formatted prompt for the LLM
    """
    return f"""
You are a strategic trade policy advisor to businesses and governments.
Based on the current tariff situation, provide strategic recommendations.

Sector: {data['sector']}
Country: {data['country']}
Current Tariffs:
{format_tariff_data(data['current_tariffs'])}

Economic Indicators:
{format_economic_indicators(data.get('economic_indicators', {}))}

Generate 3-5 strategic recommendations for businesses operating in this sector and country.
Each recommendation should:

1. Be specific and actionable
2. Include an estimated impact level (Low/Medium/High)
3. Provide clear reasoning based on economic principles
4. Include a confidence score (0-1) for the recommendation

Consider strategies such as:
- Supply chain restructuring
- Market diversification
- Lobbying approaches
- Product modification
- Pricing strategies
- Partnership opportunities

Format each recommendation as a structured entry with action, impact, reasoning, and confidence.
"""

def format_historical_data(historical_data):
    """Format historical data for inclusion in prompts."""
    if not historical_data:
        return "No historical data available."
    
    formatted = "Previous related tariffs and their effects:\n"
    for item in historical_data.get('previous_tariffs', []):
        formatted += f"- {item['year']}: {item['rate']}% tariff from {item['source']} to {item['target']} on {item['sector']}\n"
        if 'effects' in item:
            formatted += f"  Effects: {item['effects']}\n"
    
    if 'sector_elasticity' in historical_data:
        formatted += f"\nSector price elasticity: {historical_data['sector_elasticity']}\n"
    
    if 'trade_volume' in historical_data:
        formatted += f"\nAnnual trade volume in this sector: ${historical_data['trade_volume']} billion\n"
    
    return formatted

def format_tariff_data(tariffs):
    """Format tariff data for inclusion in prompts."""
    if not tariffs:
        return "No tariff data available."
    
    formatted = ""
    for country, rate in tariffs.items():
        formatted += f"- {country}: {rate}%\n"
    
    return formatted

def format_economic_indicators(indicators):
    """Format economic indicators for inclusion in prompts."""
    if not indicators:
        return "No economic indicators available."
    
    formatted = ""
    for indicator, value in indicators.items():
        formatted += f"- {indicator}: {value}\n"
    
    return formatted 