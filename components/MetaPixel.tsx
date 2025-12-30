'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        fbq: any;
    }
}

export function MetaPixel({ pixelId }: { pixelId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initialize Meta Pixel
        if (!window.fbq) {
            (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            window.fbq('init', pixelId);
        }

        // Track page view on route change
        window.fbq('track', 'PageView');
    }, [pathname, searchParams, pixelId]);

    return null;
}

// Helper functions for tracking events
export const trackEvent = (eventName: string, data?: object) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, data);
    }
};

export const trackCustomEvent = (eventName: string, data?: object) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', eventName, data);
    }
};

// Common event trackers
export const metaEvents = {
    // Standard events
    viewContent: (data?: { content_name?: string; content_category?: string }) => {
        trackEvent('ViewContent', data);
    },

    lead: (data?: { content_name?: string; value?: number; currency?: string }) => {
        trackEvent('Lead', data);
    },

    completeRegistration: (data?: { content_name?: string; status?: string }) => {
        trackEvent('CompleteRegistration', data);
    },

    schedule: (data?: { content_name?: string; value?: number }) => {
        trackEvent('Schedule', data);
    },

    contact: (data?: { content_name?: string }) => {
        trackEvent('Contact', data);
    },

    // Custom events
    demoRequested: (clinicName?: string) => {
        trackCustomEvent('DemoRequested', { clinic_name: clinicName });
    },

    formStarted: (formName: string) => {
        trackCustomEvent('FormStarted', { form_name: formName });
    },

    formCompleted: (formName: string) => {
        trackCustomEvent('FormCompleted', { form_name: formName });
    },

    buttonClicked: (buttonName: string, page: string) => {
        trackCustomEvent('ButtonClicked', { button_name: buttonName, page });
    },
};
