import { useEffect, useRef } from "react";

const files = {
  hero: "/scenes/hero-facade.png",
  heroOriginal: "/scenes/hero-original.png",
  about: "/scenes/about-structure.jpg",
  boardroom: "/scenes/about-boardroom.jpg",
  europe: "/scenes/europe-district.jpg",
  why: "/scenes/advantages-review.jpg",
  charts: "/scenes/product-charts.jpg",
  careers: "/scenes/careers-stairs.jpg",
  office: "/scenes/office-workspace.jpg",
  contacts: "/scenes/contacts-moscow.jpg",
  legal: "/scenes/legal-glass.jpg",
};

export function Scene({ variant = "hero", image = "hero" }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const visible = new WeakMap();
    const sync = () => {
      const on = document.visibilityState === "visible" && visible.get(el) !== false;
      el.toggleAttribute("data-paused", !on);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const src = files[image];

  return (
    <div ref={rootRef} className={`scene scene--${variant}`} data-scene data-image={image} aria-hidden="true">
      <div className="scene-frame">
        <img
          src={src}
          alt=""
          className="scene-photo"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
      </div>
      <div className="scene-lights" />
      <div className="scene-scrim" />
      <div className="scene-grain" />
    </div>
  );
}

export function ScenePhoto({ image, alt, className = "" }) {
  return (
    <div className={`scene-photo-fallback h-full w-full ${className}`}>
      <img
        src={files[image]}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
