// PRACTICAL ANIMATION EXAMPLES
// Copy-paste ready examples for your E-Commerce site

// ============================================================
// EXAMPLE 1: Animate Section Header + Content Cards One by One
// ============================================================

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SectionWithCards = ({ title, items }) => {
  const sectionRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Step 1: Fade in section header
    tl.from(".section-title", {
      opacity: 0,
      y: -30,
      duration: 0.5,
    });

    // Step 2: Animate each card one by one
    tl.from(".card-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15, // Each card starts 0.15s after the previous
      duration: 0.6,
      ease: "power2.out",
    });

    // Step 3: Animate action button
    tl.from(".action-button", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-10">
      <h2 className="section-title text-4xl font-bold mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="card-item bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>

      <button className="action-button mt-8 px-6 py-2 bg-black text-white rounded">
        View All
      </button>
    </section>
  );
};

// ============================================================
// EXAMPLE 2: Animate List Items with Numbered Sequence
// ============================================================

export const AnimatedList = ({ items }) => {
  const listRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in title
    tl.from(".list-title", {
      opacity: 0,
      x: -50,
      duration: 0.5,
    });

    // Animate each list item with its number
    tl.from(".list-item", {
      opacity: 0,
      x: -40,
      stagger: 0.1, // Faster stagger for smaller elements
      duration: 0.4,
    });
  }, []);

  return (
    <div ref={listRef} className="p-6">
      <h3 className="list-title text-2xl font-bold mb-4">Features</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="list-item flex items-center gap-3 mb-3">
            <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
              {idx + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ============================================================
// EXAMPLE 3: Staggered Button Group Animation
// ============================================================

export const AnimatedButtonGroup = ({ buttons }) => {
  const groupRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".btn-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.3)",
    });
  }, []);

  return (
    <div ref={groupRef} className="flex flex-wrap gap-3">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className="btn-item px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

// ============================================================
// EXAMPLE 4: Image Gallery with Zoom Effect
// ============================================================

export const AnimatedGallery = ({ images }) => {
  const galleryRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in title
    tl.from(".gallery-title", {
      opacity: 0,
      duration: 0.4,
    });

    // Animate images with zoom effect
    tl.from(".gallery-image", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.12,
      duration: 0.5,
      ease: "back.out(1.5)",
    });
  }, []);

  return (
    <div ref={galleryRef}>
      <h2 className="gallery-title text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-image rounded-lg overflow-hidden">
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-48 object-cover hover:scale-110 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// EXAMPLE 5: Sequential Text Animation (Word by Word)
// ============================================================

export const AnimatedText = ({ text }) => {
  const textRef = useRef();

  useGSAP(() => {
    const words = text.split(" ");
    const tl = gsap.timeline();

    // Animate each word one by one
    tl.from(".word", {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
    });
  }, []);

  return (
    <h1 ref={textRef} className="text-5xl font-bold">
      {text.split(" ").map((word, idx) => (
        <span key={idx} className="word mr-2">
          {word}
        </span>
      ))}
    </h1>
  );
};

// ============================================================
// EXAMPLE 6: Modal/Popup with Entrance Animation
// ============================================================

export const AnimatedModal = ({ isOpen, children, onClose }) => {
  const modalRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    if (isOpen) {
      // Fade in backdrop
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
      });

      // Slide up and fade in content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out(1.2)",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-lg p-8 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

// ============================================================
// EXAMPLE 7: Animated Counter (Multiple Counters)
// ============================================================

export const AnimatedCounters = ({ counters }) => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in counter cards
    tl.from(".counter-card", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.5,
    });

    // Start counter animations
    counters.forEach((counter) => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: counter.endValue,
        duration: 2,
        ease: "power2.out",
        delay: 0.5, // Wait for cards to appear
        onUpdate: () => {
          const refs = containerRef.current.querySelectorAll(
            `.counter-${counter.id}`
          );
          refs.forEach((ref) => {
            ref.textContent = Math.floor(obj.value).toLocaleString();
          });
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-3 gap-6">
      {counters.map((counter) => (
        <div key={counter.id} className="counter-card bg-gray-100 p-6 rounded">
          <div className={`counter-${counter.id} text-4xl font-bold`}>0</div>
          <p className="text-gray-600">{counter.label}</p>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// EXAMPLE 8: Animated Feature Showcase (Image + Text Alternate)
// ============================================================

export const AnimatedFeatureShowcase = ({ features }) => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    features.forEach((_, idx) => {
      const isEven = idx % 2 === 0;

      // Animate image
      tl.from(
        `.feature-image-${idx}`,
        {
          opacity: 0,
          x: isEven ? -100 : 100,
          duration: 0.6,
        },
        idx === 0 ? 0 : "-=0.3" // Overlap animations
      );

      // Animate text
      tl.from(
        `.feature-text-${idx}`,
        {
          opacity: 0,
          x: isEven ? 100 : -100,
          duration: 0.6,
        },
        "-=0.4" // Start before image animation ends
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-8 ${
            idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className={`feature-image-${idx} flex-1`}>
            <img src={feature.image} alt={feature.title} className="w-full" />
          </div>
          <div className={`feature-text-${idx} flex-1`}>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// EXAMPLE 9: Scroll-triggered Section Animation
// (Animates when section comes into view - Requires ScrollTrigger)
// ============================================================

import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const AnimatedOnScroll = ({ title, items }) => {
  const sectionRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // When top of element reaches center of viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
    });

    tl.from(".scroll-item", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.6,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <h2 className="text-4xl font-bold mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="scroll-item bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// EXAMPLE 10: Chained Animation with Multiple Stages
// ============================================================

export const ComplexAnimation = () => {
  const containerRef = useRef();
  const stage1Ref = useRef();
  const stage2Ref = useRef();
  const stage3Ref = useRef();

  useGSAP(() => {
    const masterTl = gsap.timeline();

    // STAGE 1: Intro animation
    masterTl.from(stage1Ref.current, {
      opacity: 0,
      duration: 0.5,
    });

    // STAGE 2: Main content appears
    masterTl.from(stage2Ref.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "back.out(1.5)",
    });

    // STAGE 3: Call-to-action
    masterTl.from(stage3Ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });

    // Play audio or trigger event at specific time
    masterTl.call(() => {
      console.log("Mid-animation milestone reached!");
    }, null, 1); // At 1 second
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={stage1Ref} className="text-center mb-8">
        <h1 className="text-5xl font-bold">Welcome</h1>
      </div>

      <div ref={stage2Ref} className="bg-gray-50 p-12 rounded-lg mb-8">
        <p className="text-xl text-gray-700">Main content here</p>
      </div>

      <div ref={stage3Ref} className="text-center">
        <button className="px-8 py-3 bg-black text-white rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};
