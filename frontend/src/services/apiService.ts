import axios from 'axios';
import { currentTariffData } from '@/utils/mockData';

// Configure API base URLs
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const AI_SERVICE_URL = process.env.NEXT_PUBLIC_AI_SERVICE_URL || 'http://localhost:8000';

// Configure axios instances
const backendApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

const aiServiceApi = axios.create({
  baseURL: AI_SERVICE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Fetch current tariff data including recent changes and news
 */
export const fetchTariffData = async () => {
  // Use mock data directly to bypass connection issues
  return currentTariffData;
};

/**
 * Fetch the latest tariff-related news
 */
export const fetchLatestNews = async (limit = 5) => {
  // Use mock data directly to bypass connection issues
  return currentTariffData.newsItems.slice(0, limit);
};

/**
 * Fetch sector impact data
 */
export const fetchSectorImpact = async () => {
  // Use mock data directly to bypass connection issues
  return {
    impactData: currentTariffData.impactData,
    sectorHighlights: currentTariffData.sectorHighlights
  };
};

/**
 * Get AI-generated summaries for news articles
 */
export const summarizeNewsArticles = async (articles: any[]) => {
  try {
    const response = await aiServiceApi.post('/api/summarize', {
      articles,
      max_length: 150
    });
    return response.data.summaries;
  } catch (error) {
    console.error('Error summarizing news:', error);
    // Return original articles if AI service fails
    return articles.map(article => ({
      original_title: article.title,
      summary: article.summary,
      sentiment: article.sentiment || 'neutral',
      key_points: []
    }));
  }
};

/**
 * Predict tariff impact for specific countries and sectors
 */
export const predictTariffImpact = async (params: {
  country_from: string,
  country_to: string,
  sector: string,
  tariff_rate: number
}) => {
  try {
    const response = await aiServiceApi.post('/api/predict-impact', params);
    return response.data;
  } catch (error) {
    console.error('Error predicting tariff impact:', error);
    // Return mock prediction data
    return {
      predicted_impact: {
        gdp_change: -0.5,
        trade_volume_change: -2.3,
        price_indices: { consumer: 1.2, producer: 0.8 },
        employment_impact: -0.3,
        confidence: 0.75
      },
      analysis: "This is a fallback analysis when the AI service is unavailable."
    };
  }
};

export default {
  fetchTariffData,
  fetchLatestNews,
  fetchSectorImpact,
  summarizeNewsArticles,
  predictTariffImpact
}; 