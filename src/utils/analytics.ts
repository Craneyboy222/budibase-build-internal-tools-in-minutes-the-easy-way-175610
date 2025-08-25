/* Analytics utilities */
import mixpanel from 'mixpanel-browser';

export const trackEvent = (eventName: string, properties: any) => {
  mixpanel.track(eventName, properties);
};