from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime

class TariffData(BaseModel):
    product_code: str
    country_code: Optional[str]
    rate: float
    currency: str
    last_updated: datetime
    source: str
    additional_info: Dict

class TariffAnalysis(BaseModel):
    current_rate: float
    historical_rates: List[Dict]
    forecast: List[Dict]
    insights: List[str]
    metadata: Dict

class TariffRequest(BaseModel):
    product_code: str
    country_code: Optional[str] = None
    timeframe: Optional[str] = "1y"

class TariffResponse(BaseModel):
    wto_data: Optional[Dict]
    taric_data: Optional[Dict]
    tariffy_data: Optional[Dict]
    timestamp: datetime
    product_code: str
    country_code: Optional[str] 