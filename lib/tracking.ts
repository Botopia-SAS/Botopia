export const initializeTracking = () => {
  if (typeof window === "undefined") return;

  // Google Tag Manager: loaded centrally in app/[locale]/layout.tsx via <Script> and <noscript>.
  // No-op here to avoid duplicate injections during HMR/App Router re-renders.

  // Meta Pixel
  const pixelId =
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ||
    process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (pixelId && !(window as any).fbq) {
    ((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
      if (f.fbq) return;
      n = f.fbq = function (...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    (window as any).fbq("init", pixelId);
    (window as any).fbq("track", "PageView");
    console.log("Meta Pixel initialized with ID:", pixelId);
  }
};

// --- GTM/GA helpers (prefer dataLayer via GTM, fallback to gtag if present) ---
type EventParams = Record<string, any>;

const pushGTMEvent = (event: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;

  console.log(`Tracking event: ${event}`, params);

  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({ event, ...params });
    console.log("Event sent to dataLayer (GTM)");
    return;
  }

  if ((window as any).gtag) {
    (window as any).gtag("event", event, params);
    console.log("Event sent via gtag");
  }
};

export const trackQuoteView = (quoteId: string) => {
  console.log("trackQuoteView called for:", quoteId);
  pushGTMEvent("quote_view", { quote_id: quoteId });
  // Keep Meta Pixel client-side event for parity
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", "QuoteView", { quote_id: quoteId });
    console.log("QuoteView sent to Meta Pixel");
  }
};

export const trackQuoteFormSubmit = (
  quoteId: string,
  additionalData?: {
    email?: string;
    phone?: string;
    userAgent?: string;
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  }
) => {
  console.log("trackQuoteFormSubmit called for:", quoteId, additionalData);

  const eventData = {
    quote_id: quoteId,
    ...(additionalData?.userAgent && { user_agent: additionalData.userAgent }),
    ...(additionalData?.referrer && { referrer: additionalData.referrer }),
    ...(additionalData?.utmSource && { utm_source: additionalData.utmSource }),
    ...(additionalData?.utmMedium && { utm_medium: additionalData.utmMedium }),
    ...(additionalData?.utmCampaign && {
      utm_campaign: additionalData.utmCampaign,
    }),
  };

  pushGTMEvent("quote_form_submit", eventData);

  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead", {
      content_name: "Quote Request",
      ...eventData,
    });
    console.log("Lead event sent to Meta Pixel with additional data");
  }
};

export const trackPDFView = (quoteId: string) => {
  console.log("trackPDFView called for:", quoteId);
  pushGTMEvent("quote_pdf_view", { quote_id: quoteId });
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", "QuotePDFView", { quote_id: quoteId });
    console.log("QuotePDFView sent to Meta Pixel");
  }
};
