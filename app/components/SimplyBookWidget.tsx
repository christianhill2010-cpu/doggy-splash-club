"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    SimplybookWidget?: new (config: Record<string, unknown>) => unknown;
  }
}

const widgetConfig = {
  widget_type: "iframe",
  url: "https://thedoggysplashclub.simplybook.it",
  theme: "emeri",
  theme_settings: {
    timeline_hide_unavailable: "1",
    hide_past_days: "0",
    timeline_show_end_time: "0",
    timeline_modern_display: "as_slots",
    sb_base_color: "#f9a03f",
    display_item_mode: "block",
    booking_nav_bg_color: "#ffffff",
    body_bg_color: "#ffffff",
    sb_review_image: "",
    dark_font_color: "#47413e",
    light_font_color: "#ffffff",
    btn_color_1: "#f7d488",
    sb_company_label_color: "#ffffff",
    hide_img_mode: "1",
    sb_busy: "#c7b3b3",
    sb_available: "#d1f0ff",
  },
  timeline: "modern",
  datepicker: "top_calendar",
  is_rtl: false,
  app_config: {
    clear_session: 0,
    allow_switch_to_ada: 0,
    predefined: [],
  },
};

export default function SimplyBookWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let cancelled = false;

    const mountWidget = () => {
      if (cancelled || !window.SimplybookWidget) {
        return;
      }

      container.innerHTML = "";

      const inlineScript = document.createElement("script");
      inlineScript.type = "text/javascript";
      inlineScript.text = `var widget = new SimplybookWidget(${JSON.stringify(widgetConfig)});`;
      container.appendChild(inlineScript);
    };

    if (window.SimplybookWidget) {
      mountWidget();
    } else {
      const externalScript = document.createElement("script");
      externalScript.src = "https://widget.simplybook.it/v2/widget/widget.js";
      externalScript.type = "text/javascript";
      externalScript.async = true;
      externalScript.onload = mountWidget;
      container.appendChild(externalScript);
    }

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="simplybook-widget-host" />;
}
