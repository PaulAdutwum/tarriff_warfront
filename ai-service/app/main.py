"""
AI service module for the Tariff War application.
Provides endpoints for news summarization, tariff impact prediction, and business recommendations.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Tariff War AI Service",
    description="AI service for tariff analysis, news summarization, and impact prediction",
    version="0.1.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class NewsArticle(BaseModel):
    title: str
    content: str
    source: str
    published_date: str
    url: str

class SummarizeRequest(BaseModel):
    articles: List[NewsArticle]
    max_length: Optional[int] = 200

class PredictionRequest(BaseModel):
    country_from: str
    country_to: str
    sector: str
    tariff_rate: float
    historical_data: Optional[Dict[str, Any]] = None

class RecommendationRequest(BaseModel):
    sector: str
    country: str
    current_tariffs: Dict[str, float]
    economic_indicators: Optional[Dict[str, Any]] = None

# Routes
@app.get("/")
async def root():
    return {"message": "Tariff War AI Service API"}

@app.post("/api/summarize")
async def summarize_news(request: SummarizeRequest):
    try:
        # In a real implementation, this would call your summarization model
        # For now, we'll just return a placeholder
        summaries = []
        for article in request.articles:
            summaries.append({
                "original_title": article.title,
                "summary": f"AI summary of {article.title} limited to {request.max_length} chars.",
                "sentiment": "neutral",
                "key_points": ["Point 1", "Point 2", "Point 3"]
            })
        
        return {"summaries": summaries}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/predict-impact")
async def predict_impact(request: PredictionRequest):
    try:
        # Placeholder for actual ML prediction
        return {
            "predicted_impact": {
                "gdp_change": -0.5,
                "trade_volume_change": -2.3,
                "price_indices": {"consumer": 1.2, "producer": 0.8},
                "employment_impact": -0.3,
                "confidence": 0.75
            },
            "analysis": "This is a placeholder for ML-generated analysis."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/recommendations")
async def get_recommendations(request: RecommendationRequest):
    try:
        # Placeholder for recommendation engine
        return {
            "recommendations": [
                {
                    "action": "Diversify supply chain",
                    "impact": "Medium",
                    "reasoning": "Current tariffs increase costs from primary suppliers.",
                    "confidence": 0.82
                },
                {
                    "action": "Explore alternative markets",
                    "impact": "High",
                    "reasoning": "New market opportunities with lower tariff barriers.",
                    "confidence": 0.76
                }
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True) 