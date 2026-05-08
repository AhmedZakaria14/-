// Google Tag Manager Data Layer Interface
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Event Types
export type AnalyticsEvent = 
  | 'page_view'
  | 'generate_lead'
  | 'contact_click'
  | 'use_tool'
  | 'select_content'
  | 'purchase';

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export const Analytics = {
  // Initialize Data Layer
  init: () => {
    window.dataLayer = window.dataLayer || [];
  },

  // Push event to Data Layer
  track: (eventName: AnalyticsEvent, params?: EventParams) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
      
      // Log to console in development
      if (import.meta.env.DEV) {
        console.log(`[Analytics] ${eventName}:`, params);
      }
    }
  },

  // Specific Event Helpers
  trackLead: (method: 'form' | 'whatsapp' | 'phone', location: string) => {
    Analytics.track('generate_lead', {
      method,
      location
    });
  },

  trackToolUsage: (toolName: string, result?: string | number) => {
    Analytics.track('use_tool', {
      tool_name: toolName,
      result_value: result
    });
  },

  trackContentSelect: (contentType: string, itemId: string) => {
    Analytics.track('select_content', {
      content_type: contentType,
      item_id: itemId
    });
  }
};
