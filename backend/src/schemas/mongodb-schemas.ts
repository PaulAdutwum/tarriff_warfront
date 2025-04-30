import { Schema, Document } from 'mongoose';

export interface NewsArticleMongo extends Document {
  externalId: string;
  title: string;
  content: string;
  summary: string;
  source: string;
  author?: string;
  publishedDate: Date;
  url: string;
  imageUrl?: string;
  sentiment?: string;
  relevanceScore?: number;
  keyPhrases: string[];
  countries: string[];
  sectors: string[];
  aiAnalysis: {
    entities: Array<{ name: string; type: string; relevance: number }>;
    topics: Array<{ name: string; relevance: number }>;
    sentimentDetails: {
      positive: number;
      negative: number;
      neutral: number;
      compound: number;
    };
    relatedArticles: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export const NewsArticleSchema = new Schema({
  externalId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String },
  source: { type: String, required: true },
  author: { type: String },
  publishedDate: { type: Date, required: true },
  url: { type: String, required: true, unique: true },
  imageUrl: { type: String },
  sentiment: { type: String },
  relevanceScore: { type: Number },
  keyPhrases: [{ type: String }],
  countries: [{ type: String }],
  sectors: [{ type: String }],
  aiAnalysis: {
    entities: [{ 
      name: { type: String },
      type: { type: String },
      relevance: { type: Number }
    }],
    topics: [{ 
      name: { type: String },
      relevance: { type: Number }
    }],
    sentimentDetails: {
      positive: { type: Number },
      negative: { type: Number },
      neutral: { type: Number },
      compound: { type: Number }
    },
    relatedArticles: [{ type: String }]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export interface AiPrediction extends Document {
  id: string;
  predictionType: string;
  sourceCountry: string;
  targetCountry: string;
  sector: string;
  tariffRate: number;
  predictionDate: Date;
  predictionResults: {
    gdpImpact: number;
    tradeVolumeImpact: number;
    priceIndices: {
      consumer: number;
      producer: number;
    };
    employmentImpact: number;
    confidenceScore: number;
  };
  modelVersion: string;
  modelFeatures: string[];
  dataPoints: number;
  analysisText: string;
  createdAt: Date;
  updatedAt: Date;
}

export const AiPredictionSchema = new Schema({
  id: { type: String, required: true, unique: true },
  predictionType: { type: String, required: true },
  sourceCountry: { type: String, required: true },
  targetCountry: { type: String, required: true },
  sector: { type: String, required: true },
  tariffRate: { type: Number, required: true },
  predictionDate: { type: Date, default: Date.now },
  predictionResults: {
    gdpImpact: { type: Number },
    tradeVolumeImpact: { type: Number },
    priceIndices: {
      consumer: { type: Number },
      producer: { type: Number }
    },
    employmentImpact: { type: Number },
    confidenceScore: { type: Number }
  },
  modelVersion: { type: String },
  modelFeatures: [{ type: String }],
  dataPoints: { type: Number },
  analysisText: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export interface Recommendation extends Document {
  id: string;
  userId?: string;
  sector: string;
  country: string;
  currentTariffs: Record<string, number>;
  economicIndicators?: Record<string, any>;
  recommendations: Array<{
    action: string;
    impact: string;
    reasoning: string;
    confidence: number;
  }>;
  generatedDate: Date;
  modelVersion: string;
  createdAt: Date;
}

export const RecommendationSchema = new Schema({
  id: { type: String, required: true, unique: true },
  userId: { type: String },
  sector: { type: String, required: true },
  country: { type: String, required: true },
  currentTariffs: { type: Map, of: Number },
  economicIndicators: { type: Map, of: Schema.Types.Mixed },
  recommendations: [{
    action: { type: String, required: true },
    impact: { type: String, required: true },
    reasoning: { type: String },
    confidence: { type: Number }
  }],
  generatedDate: { type: Date, default: Date.now },
  modelVersion: { type: String },
  createdAt: { type: Date, default: Date.now }
}); 