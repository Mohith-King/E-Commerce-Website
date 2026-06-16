# E-Commerce Animation Guide

## Overview
Your project uses **GSAP (GreenSock Animation Platform)** with React's `useGSAP` hook for all animations. This guide explains how animations work and how to animate elements **one by one** (sequentially).

---

## Current Animation Setup

### Libraries Used
- `gsap` - Animation library
- `@gsap/react` - React wrapper for GSAP
- `react-icons` - Icon library

### Installation (Already Done)
```bash
npm install gsap @gsap/react
```

---

## Core Concepts for Sequential Animations

### 1. **GSAP Timeline (Most Important for Sequential Animations)**
A timeline allows you to chain animations in sequence. Each animation automatically starts after the previous one ends.

```javascript
const tl = gsap.timeline();

// These run one after another
tl.from(".element1", { opacity: 0, duration: 1 })
  .from(".element2", { y: 50, duration: 1 })
  .from(".element3", { x: 100, duration: 1 });
```

### 2. **Stagger (For Multiple Similar Elements)**
Automatically adds delay between animations of similar elements:

```javascript
tl.from(".item", {
  opacity: 0,
  y: 20,
  stagger: 0.2,  // 0.2 second delay between each item
  duration: 0.5
});
```

### 3. **Position Parameter (Control Timing)**
Use the position parameter to control when animations start:

```javascript
tl.from(".element1", { opacity: 0, duration: 1 })      // Starts at 0s
  .from(".element2", { y: 50, duration: 1 })           // Starts at 1s (after element1)
  .from(".element3", { x: 100, duration: 1 }, "-=0.5"); // Starts at 0.5s (overlap with element2)
```

---

## Current Animations in Your Project

### 1. **Navbar Animation** (`animations.js`)
**Location:** [src/Components/animations.js](src/Components/animations.js)

**How it works:**
- Logo slides in from left
- Navigation links fade in from top (one by one with 0.3s stagger)
- Search bar slides in from left
- Cart and user icons slide in from right

```javascript
const tl = gsap.timeline();

tl.from(".mainHead", { x: -40, opacity: 0, duration: 0.3 });
tl.from(".mainLinks a", { opacity: 0, y: -40, duration: 0.3, stagger: 0.3 });
tl.from(".search", { x: -100, opacity: 0, duration: 0.4 });
tl.from(".cartItem,.user", { x: 100, duration: 0.4, stagger: 0.3, opacity: 0.3 });
```

---

### 2. **Landing Page Hero Animation** ([src/Pages/Landing.jsx](src/Pages/Landing.jsx))
**Sequential Animations:**
1. Hero heading slides up
2. Description fades in (with offset to overlap)
3. Button scales in with bounce effect
4. Stats fade in one by one
5. Counter animation starts (animated numbers)
6. Hero image slides in with floating effect

**Key: Uses `.call()` to trigger counter animation**

```javascript
const tl = gsap.timeline();

tl.from(".hero-heading", { y: 100, opacity: 0, duration: 1 })
  .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.6")
  .from(".hero-btn", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
  .from(".hero-stat", { y: 40, opacity: 0, stagger: 0.15, duration: 0.5 })
  .call(() => { animateCounters(); })  // Call function when timeline reaches this point
  .from(".hero-image", { x: 200, opacity: 0, duration: 1.2 }, "-=1");
```

---

### 3. **Marquee Animation** ([src/Components/Marquee.jsx](src/Components/Marquee.jsx))
**Continuous scrolling animation:**

```javascript
gsap.to(marqueeRef.current, {
  xPercent: -50,    // Move 50% of width
  duration: 15,     // 15 seconds
  ease: "none",     // Linear motion
  repeat: -1        // Infinite repeat
});
```

---

### 4. **Mobile Sidebar Animation** ([src/Components/Msidebar.jsx](src/Components/Msidebar.jsx))
**Slide-in/Slide-out animation:**

```javascript
// Opening
gsap.to(sidebar.current, {
  x: 0,
  duration: 1,
  ease: "power3.out"
});

// Closing
gsap.to(sidebar.current, {
  x: "-100%",
  duration: 0.5,
  ease: "power3.in"
});
```

---

### 5. **Counter Animation**
**Animates numbers counting up:**

```javascript
const counters = [
  { ref: brandRef, end: 200 },
  { ref: productRef, end: 2000 },
  { ref: customerRef, end: 30000 }
];

counters.forEach((counter) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: counter.end,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      counter.ref.current.textContent = 
        Math.floor(obj.value).toLocaleString() + "+";
    }
  });
});
```

---

## How to Create Your Own Sequential Animations

### Step 1: Import GSAP and useGSAP
```javascript
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
```

### Step 2: Create Refs for Elements to Animate
```javascript
const containerRef = useRef();
```

### Step 3: Add useGSAP Hook
```javascript
useGSAP(() => {
  const tl = gsap.timeline();
  
  // Add animations here
}, []);
```

### Step 4: Build Your Timeline (One by One)
```javascript
useGSAP(() => {
  const tl = gsap.timeline();
  
  // Animation 1: Fade in heading
  tl.from(".section-title", { 
    opacity: 0, 
    duration: 0.5 
  });
  
  // Animation 2: Slide in cards (one by one)
  tl.from(".card", { 
    y: 50, 
    opacity: 0, 
    stagger: 0.2,    // 0.2s delay between each card
    duration: 0.6 
  });
  
  // Animation 3: Fade in footer (after cards)
  tl.from(".footer", { 
    opacity: 0, 
    duration: 0.4 
  });
  
}, []);
```

---

## Common Animation Properties

### From/To
- **`.from()`** - Animates FROM the specified values TO the current CSS state
- **`.to()`** - Animates TO the specified values FROM the current state

```javascript
// Element starts at opacity 0, animates to opacity 1
tl.from(".element", { opacity: 0, duration: 1 });

// Element starts at opacity 1, animates to opacity 0
tl.to(".element", { opacity: 0, duration: 1 });
```

### Common Properties
```javascript
{
  duration: 1,           // Animation length in seconds
  delay: 0.5,           // Wait before starting
  stagger: 0.2,         // Delay between elements (for multiple items)
  opacity: 0,           // Target opacity
  y: 100,               // Move down 100px
  x: -50,               // Move left 50px
  scale: 0.5,           // Scale to 50%
  rotation: 360,        // Rotate degrees
  ease: "power2.out",   // Easing function (smoother motion)
  repeat: -1,           // -1 = infinite repeat
  yoyo: true           // Reverse animation after completion
}
```

### Easing Functions (for smoother animations)
```javascript
ease: "power1.out"      // Light ease out
ease: "power2.out"      // Medium ease out
ease: "power3.out"      // Strong ease out
ease: "power4.out"      // Very strong ease out
ease: "back.out(1.7)"   // Bouncy effect
ease: "elastic.out"     // Elastic bounce
ease: "none"            // Linear (no easing)
```

---

## Timeline Position Parameter (Advanced Sequencing)

Control exactly when each animation starts:

```javascript
const tl = gsap.timeline();

// Time 0s → 1s
tl.from(".box1", { opacity: 0, duration: 1 });

// Time 1s → 2s (default: after previous animation)
tl.from(".box2", { y: 50, duration: 1 });

// Time 1.5s → 2.5s (overlaps with box2, starts 0.5s before box2 ends)
tl.from(".box3", { x: 100, duration: 1 }, "-=0.5");

// Time 0s → 1s (goes back to start, overlaps with box1)
tl.from(".box4", { scale: 0, duration: 1 }, 0);

// Time 2s → 3s (absolute position on timeline)
tl.from(".box5", { rotation: 360, duration: 1 }, 2);
```

---

## Example: Animate Product Cards One by One

```javascript
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductCards = ({ products }) => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate header first
    tl.from(".products-header", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.out"
    });

    // Animate each product card one by one
    tl.from(".product-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,     // 0.15s delay between cards
      duration: 0.5,
      ease: "back.out(1.3)"
    });

    // Animate button after cards
    tl.from(".view-all-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4
    });

  }, []);

  return (
    <section ref={containerRef}>
      <h2 className="products-header">Featured Products</h2>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All</button>
    </section>
  );
};
```

---

## Best Practices

✅ **Do:**
- Use timelines for sequential animations
- Use stagger for similar elements
- Test on different devices
- Use meaningful easing functions
- Keep animations < 1 second for quick feedback

❌ **Don't:**
- Animate too many things simultaneously
- Use very long durations (> 2 seconds)
- Forget to import useGSAP
- Animate without performance testing
- Animate on scroll without ScrollTrigger (advanced)

---

## Quick Reference Cheatsheet

| Task | Code |
|------|------|
| Fade in one element | `tl.from(".el", { opacity: 0, duration: 0.5 })` |
| Fade in multiple elements sequentially | `tl.from(".els", { opacity: 0, stagger: 0.2, duration: 0.5 })` |
| Slide in from left | `tl.from(".el", { x: -100, opacity: 0 })` |
| Slide in from right | `tl.from(".el", { x: 100, opacity: 0 })` |
| Slide in from top | `tl.from(".el", { y: -100, opacity: 0 })` |
| Slide in from bottom | `tl.from(".el", { y: 100, opacity: 0 })` |
| Scale bounce effect | `tl.from(".el", { scale: 0, ease: "back.out(1.7)" })` |
| Rotate element | `tl.from(".el", { rotation: 360 })` |
| Continuous scroll | `gsap.to(".el", { xPercent: -50, repeat: -1, duration: 15 })` |

---

## Troubleshooting

**Animation not playing?**
- Check if class names match in HTML
- Ensure useGSAP dependency array is correct
- Verify gsap is imported

**Animation jumpy?**
- Use proper easing functions
- Reduce duration if too short
- Check z-index conflicts

**Performance issues?**
- Reduce number of simultaneous animations
- Use `will-change: transform` in CSS
- Avoid animating large DOM trees

---

## Resources
- [GSAP Official Docs](https://gsap.com)
- [useGSAP React Docs](https://gsap.com/react)
- [Easing Visualizer](https://gsap.com/docs/v3/Eases)

