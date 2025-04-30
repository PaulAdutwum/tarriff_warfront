// Current 2025 tariff data - used for development and as fallback when APIs are unavailable
export const currentTariffData = {
  recentTariffs: [
    {
      id: '1',
      sourceCountry: { name: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
      targetCountry: { name: 'China', code: 'CN', flagUrl: '/flags/cn.svg' },
      sector: { name: 'Semiconductors', id: '1' },
      tariffRate: 35,
      previousRate: 25,
      effectiveDate: '2025-05-15',
      announcementDate: '2025-04-10',
      description: 'New semiconductor import tariffs as part of tech sovereignty initiative'
    },
    {
      id: '2',
      sourceCountry: { name: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
      targetCountry: { name: 'European Union', code: 'EU', flagUrl: '/flags/eu.svg' },
      sector: { name: 'Automotive', id: '2' },
      tariffRate: 12,
      previousRate: 18,
      effectiveDate: '2025-04-01',
      announcementDate: '2025-03-10', 
      description: 'Reduced automotive tariffs following new trade agreement'
    },
    {
      id: '3',
      sourceCountry: { name: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
      targetCountry: { name: 'India', code: 'IN', flagUrl: '/flags/in.svg' },
      sector: { name: 'Pharmaceuticals', id: '3' },
      tariffRate: 22,
      previousRate: 15,
      effectiveDate: '2025-04-20',
      announcementDate: '2025-03-22',
      description: 'Increased tariffs on pharmaceutical imports amid healthcare security concerns'
    },
    {
      id: '4',
      sourceCountry: { name: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
      targetCountry: { name: 'Mexico', code: 'MX', flagUrl: '/flags/mx.svg' },
      sector: { name: 'Agriculture', id: '4' },
      tariffRate: 8,
      previousRate: 5,
      effectiveDate: '2025-05-01',
      announcementDate: '2025-04-15',
      description: 'Modest increase in agricultural product tariffs targeting specific produce categories'
    },
    {
      id: '5',
      sourceCountry: { name: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
      targetCountry: { name: 'Brazil', code: 'BR', flagUrl: '/flags/br.svg' },
      sector: { name: 'Steel', id: '5' },
      tariffRate: 30,
      previousRate: 30,
      effectiveDate: '2025-03-15',
      announcementDate: '2025-02-20',
      description: 'Extension of existing steel tariffs with no rate change after industry review'
    }
  ],
  
  newsItems: [
    {
      id: '1',
      title: 'U.S. Semiconductor Tariffs Ripple Through Global Supply Chains',
      summary: 'New 35% tariffs on Chinese semiconductors are creating major shifts in tech manufacturing centers.',
      source: 'Global Trade Today',
      publishedDate: '2025-05-08',
      url: '#',
      relatedCountries: ['US', 'CN', 'TW'],
      sentiment: 'negative'
    },
    {
      id: '2',
      title: 'EU-US Automotive Agreement Signals New Cooperation Phase',
      summary: 'Reduced tariffs on vehicles mark an important step in transatlantic trade relations.',
      source: 'European Economic Review',
      publishedDate: '2025-04-12',
      url: '#',
      relatedCountries: ['US', 'EU', 'DE'],
      sentiment: 'positive'
    },
    {
      id: '3',
      title: 'India Considers Retaliatory Measures Against US Pharmaceutical Tariffs',
      summary: 'Officials signal potential counter-tariffs on American medical technologies.',
      source: 'South Asia Trade Monitor',
      publishedDate: '2025-04-21',
      url: '#',
      relatedCountries: ['US', 'IN'],
      sentiment: 'negative'
    },
    {
      id: '4',
      title: 'US-Mexico Agricultural Tariffs Impact Produce Prices',
      summary: 'Consumer food costs projected to rise following implementation of new tariff schedule.',
      source: 'American Agriculture Weekly',
      publishedDate: '2025-05-07',
      url: '#',
      relatedCountries: ['US', 'MX'],
      sentiment: 'negative'
    },
    {
      id: '5',
      title: 'Technology Companies Adapting to New Semiconductor Tariff Reality',
      summary: 'Major tech firms announce supply chain restructuring to mitigate impact of increased costs.',
      source: 'Tech Industry Report',
      publishedDate: '2025-05-12',
      url: '#',
      relatedCountries: ['US', 'CN', 'VN', 'MY'],
      sentiment: 'neutral'
    }
  ],
  
  impactData: [
    { 
      sector: 'Healthcare', 
      change: +3.7, 
      status: 'increase',
      metric: 'Medical equipment costs up 3.7% QoQ',
      detail: 'Driven by 22% tariff increase on pharmaceutical imports from India'
    },
    { 
      sector: 'Transportation', 
      change: -2.4, 
      status: 'decrease',
      metric: 'Vehicle import costs down 2.4%',
      detail: 'Following reduced automotive tariffs with EU partners'
    },
    { 
      sector: 'Technology', 
      change: +5.2, 
      status: 'increase',
      metric: 'Consumer electronics price index up 5.2%',
      detail: 'Related to 35% semiconductor tariffs against China'
    },
    { 
      sector: 'Business', 
      change: +1.8, 
      status: 'increase',
      metric: 'Small business operating costs up 1.8%',
      detail: 'Combined effect of tech and healthcare tariff changes'
    }
  ],
  
  sectorHighlights: [
    {
      id: '1',
      sector: 'Healthcare',
      impact: 'High',
      trend: 'Medical device costs showing sharp increase for hospitals',
      metrics: {
        costIndex: +3.7,
        importVolume: -8.2,
        inventoryLevels: -12.4
      }
    },
    {
      id: '2',
      sector: 'Automotive',
      impact: 'Medium',
      trend: 'European luxury vehicles becoming more accessible to US market',
      metrics: {
        costIndex: -2.4,
        importVolume: +6.8,
        dealerInventory: +9.3
      }
    },
    {
      id: '3',
      sector: 'Technology',
      impact: 'Critical',
      trend: 'Computing hardware prices continue upward trajectory',
      metrics: {
        costIndex: +5.2,
        manufacturingShifts: 'Accelerating',
        consumerDemand: -3.1
      }
    },
    {
      id: '4',
      sector: 'Finance',
      impact: 'Medium',
      trend: 'Banking sector experiences fluctuations from trade uncertainty',
      metrics: {
        marketVolatility: +2.8,
        foreignExchange: 'Elevated',
        investorSentiment: 'Cautious'
      }
    },
    {
      id: '5',
      sector: 'Agriculture',
      impact: 'Moderate',
      trend: 'Food import price increases expected to reach consumers by Q2',
      metrics: {
        producePriceIndex: +2.1,
        supplyChainDisruption: 'Minimal',
        domesticProduction: +3.5
      }
    }
  ],
  
  // For the S&P500, healthcare costs, and import volume metrics
  marketMetrics: {
    sp500Movement: -1.2,
    healthcareCostIndex: +3.7,
    importVolumeElectronics: -6.8,
    smallBusinessImpact: +2.1,
    consumerPriceIndex: +0.8
  }
}; 