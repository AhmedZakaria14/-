// Analytics interface (No-op after removing Google integrations)

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
  init: () => {},
  track: (eventName: AnalyticsEvent, params?: EventParams) => {
    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${eventName}:`, params);
    }
  },
  trackLead: (method: 'form' | 'whatsapp' | 'phone', location: string) => {
    Analytics.track('generate_lead', { method, location });
  },
  trackToolUsage: (toolName: string, result?: string | number) => {
    Analytics.track('use_tool', { tool_name: toolName, result_value: result });
  },
  trackContentSelect: (contentType: string, itemId: string) => {
    Analytics.track('select_content', { content_type: contentType, item_id: itemId });
  }
};
