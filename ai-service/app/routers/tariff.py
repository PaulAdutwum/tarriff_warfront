from fastapi import APIRouter, HTTPException
from typing import Optional
from app.services.tariff_data import TariffDataService
from app.models.tariff import TariffRequest, TariffResponse

router = APIRouter(
    prefix="/api/tariffs",
    tags=["tariffs"],
    responses={404: {"description": "Not found"}},
)

@router.get("/{product_code}", response_model=TariffResponse)
async def get_tariff_data(
    product_code: str,
    country_code: Optional[str] = None
):
    """Get comprehensive tariff data for a product code"""
    try:
        service = TariffDataService()
        data = await service.get_comprehensive_tariff_data(product_code, country_code)
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{product_code}/historical")
async def get_historical_tariffs(
    product_code: str,
    timeframe: str = "1y"
):
    """Get historical tariff data for trend analysis"""
    try:
        service = TariffDataService()
        data = await service.get_historical_trends(product_code, timeframe)
        return {
            "product_code": product_code,
            "timeframe": timeframe,
            "data": data.to_dict(orient="records")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/analyze")
async def analyze_tariffs(request: TariffRequest):
    """Analyze tariff data and generate insights"""
    try:
        service = TariffDataService()
        
        # Get current data
        current_data = await service.get_comprehensive_tariff_data(
            request.product_code,
            request.country_code
        )
        
        # Get historical data
        historical_data = await service.get_historical_trends(
            request.product_code,
            request.timeframe
        )
        
        # Generate insights (placeholder for now)
        insights = [
            "Current tariff rate is within historical range",
            "No significant changes expected in the next quarter",
            "Consider alternative sourcing options for better rates"
        ]
        
        return {
            "current_data": current_data,
            "historical_data": historical_data.to_dict(orient="records"),
            "insights": insights
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 