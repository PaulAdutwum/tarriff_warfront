from typing import Dict, List, Optional
import httpx
import asyncio
from datetime import datetime
import pandas as pd
from fastapi import HTTPException
import os
from dotenv import load_dotenv

load_dotenv()

class TariffDataService:
    """Service for fetching and analyzing tariff data from multiple sources"""
    
    def __init__(self):
        # Initialize API endpoints
        self.wto_api_url = "https://api.wto.org/timeseries/v1"
        self.taric_api_url = "https://api.taricsupport.com/v1"
        self.tariffy_api_url = "https://api.tariffy.com/v1"
        
        # Initialize HTTP client with timeout
        self.client = httpx.AsyncClient(timeout=30.0)
        
        # Load API keys
        self.wto_api_key = os.getenv("WTO_API_KEY")
        self.taric_api_key = os.getenv("TARIC_API_KEY")
        self.tariffy_api_key = os.getenv("TARIFFY_API_KEY")
    
    async def get_wto_data(self, product_code: str, country_code: str) -> Dict:
        """Fetch tariff data from WTO API"""
        try:
            response = await self.client.get(
                f"{self.wto_api_url}/tariffs",
                params={
                    "product": product_code,
                    "reporter": country_code,
                    "year": datetime.now().year
                },
                headers={"Authorization": f"Bearer {self.wto_api_key}"}
            )
            return response.json()
        except Exception as e:
            print(f"WTO API Error: {str(e)}")
            return None

    async def get_taric_data(self, product_code: str, country_code: str) -> Dict:
        """Fetch data from TARIC Support API"""
        try:
            response = await self.client.get(
                f"{self.taric_api_url}/lookup",
                params={
                    "code": product_code,
                    "country": country_code
                },
                headers={"X-API-Key": f"{self.taric_api_key}"}
            )
            return response.json()
        except Exception as e:
            print(f"TARIC API Error: {str(e)}")
            return None

    async def get_tariffy_data(self, product_code: str) -> Dict:
        """Fetch data from Tariffy API"""
        try:
            response = await self.client.get(
                f"{self.tariffy_api_url}/classify",
                params={"product": product_code},
                headers={"Authorization": f"Bearer {self.tariffy_api_key}"}
            )
            return response.json()
        except Exception as e:
            print(f"Tariffy API Error: {str(e)}")
            return None

    async def get_comprehensive_tariff_data(
        self, 
        product_code: str, 
        country_code: Optional[str] = None
    ) -> Dict:
        """Fetch and combine data from all sources"""
        tasks = [
            self.get_wto_data(product_code, country_code),
            self.get_taric_data(product_code, country_code),
            self.get_tariffy_data(product_code)
        ]
        
        results = await asyncio.gather(*tasks)
        
        return {
            "wto_data": results[0],
            "taric_data": results[1],
            "tariffy_data": results[2],
            "timestamp": datetime.now().isoformat(),
            "product_code": product_code,
            "country_code": country_code
        }

    async def get_historical_trends(
        self, 
        product_code: str, 
        timeframe: str = "1y"
    ) -> pd.DataFrame:
        """Fetch historical tariff data for trend analysis"""
        end_date = datetime.now()
        start_date = self.calculate_start_date(end_date, timeframe)
        
        try:
            response = await self.client.get(
                f"{self.wto_api_url}/historical",
                params={
                    "product": product_code,
                    "start_date": start_date.isoformat(),
                    "end_date": end_date.isoformat()
                }
            )
            
            data = response.json()
            df = pd.DataFrame(data["rates"])
            df["date"] = pd.to_datetime(df["date"])
            
            return df
        except Exception as e:
            print(f"Historical data error: {str(e)}")
            return pd.DataFrame()

    @staticmethod
    def calculate_start_date(end_date: datetime, timeframe: str) -> datetime:
        """Calculate start date based on timeframe"""
        if timeframe == "1y":
            return end_date.replace(year=end_date.year - 1)
        elif timeframe == "6m":
            return end_date.replace(month=end_date.month - 6)
        elif timeframe == "1m":
            return end_date.replace(month=end_date.month - 1)
        else:
            return end_date.replace(year=end_date.year - 1) 