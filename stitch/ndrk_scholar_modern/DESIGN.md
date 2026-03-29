# Design System Specification: The Academic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Curator"**

This design system rejects the "institutional template" in favor of a high-end editorial experience. It balances the weight of academic tradition with the kinetic energy of a Gen Z audience. Instead of rigid grids and heavy borders, we utilize **Intentional Asymmetry** and **Tonal Layering**.

The "Modern Curator" aesthetic treats the screen like a premium gallery or a high-fashion academic journal. We break the layout with overlapping elements—such as a serif headline partially masking a high-quality photograph—to create a sense of depth and curated intent. This approach signals to the student that the institution is both an authority (Tradition) and a forward-thinking launchpad (Energy).

---

## 2. Colors & Surface Philosophy

The color palette is anchored in `primary` (#00113a), a deep, authoritative navy, contrasted by the high-voltage `secondary` (#00677e) and the prestigious `tertiary` gold (#705d00).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through background color shifts.
* **Example:** A `surface-container-low` section should sit directly against a `surface` background. The change in hex value is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine paper.
* **Base:** `surface` (#f8f9fa)
* **Sectioning:** `surface-container-low` (#f3f4f5)
* **Cards/Interactive Elements:** `surface-container-lowest` (#ffffff)
By nesting these, you create "soft depth" that feels architectural rather than digital.

### Signature Textures & Glass
To avoid a flat, "out-of-the-box" feel:
* **The Glass Rule:** Use `surface-tint` (#435b9f) at 5-10% opacity with a `backdrop-blur` of 20px for navigation bars or floating headers.
* **Gradient Soul:** Apply a subtle linear gradient (135°) from `primary` (#00113a) to `primary_container` (#002366) for Hero CTAs. This adds a "lithographic" quality to the digital surface.

---

## 3. Typography: The Editorial Contrast

The typographic soul of this system lies in the juxtaposition of the intellectual serif and the functional sans-serif.

* **Headlines (Newsreader):** Use `display-lg` and `headline-lg` to establish authority. Newsreader’s elegant terminals convey "Trust." Use tighter letter-spacing (-2%) for large displays to create a "locked-in" editorial look.
* **Body & UI (Manrope):** All functional text uses Manrope. Its geometric yet friendly curves provide the "Modern/Gen Z" balance.
* **Hierarchy Note:** Use `label-md` in all-caps with 0.1rem letter-spacing for category tags (e.g., "ADMISSIONS 2024") to mimic the look of a premium masthead.

---

## 4. Elevation & Depth

We move away from the "floating box" shadow of 2010. Our depth is environmental.

* **Tonal Layering:** Always prioritize `surface-container` tiers over shadows. Place a `surface-container-lowest` card on a `surface-container-high` background for a natural, tactile lift.
* **Ambient Shadows:** If a shadow is required for a floating Action Button, use a custom blur: `0px 20px 40px rgba(25, 28, 29, 0.06)`. The shadow must be tinted with the `on-surface` color, never pure black.
* **The Ghost Border:** If accessibility requires a stroke, use `outline-variant` (#c5c6d2) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards & Lists
* **Constraint:** Absolute ban on divider lines.
* **Execution:** Use `spacing-6` (2rem) to separate list items. For cards, use `rounded-xl` (0.75rem) and distinguish them from the background using a tier-shift (e.g., `surface` to `surface-container-lowest`).
* **Photography:** Cards featuring photography should use a slight zoom-on-hover effect (1.02x) to provide "energetic" feedback.

### Buttons
* **Primary:** A gradient-filled container (`primary` to `primary_container`) with `on_primary` text. Use `rounded-full` for a modern, friendly feel.
* **Secondary:** No fill. Use a "Ghost Border" (outline-variant at 20%) with `secondary` (#00677e) text.
* **States:** On hover, primary buttons should shift toward `secondary_container` (#00d2fd) for a "vibrant" spark.

### Academic Meta-Data (Chips)
* **Styling:** Use `tertiary_fixed` (#ffe16d) backgrounds with `on_tertiary_fixed` text for high-priority alerts (e.g., "Scholarship Open").
* **Shape:** Use `rounded-sm` (0.125rem) for chips to contrast against the rounded buttons, signaling "Information" vs. "Action."

### Input Fields
* **Layout:** Use "Floating Labels" where the label is in `label-md` (Manrope) and sits above a `surface-container-highest` trough.
* **Focus State:** Instead of a thick border, use a 2px bottom-bar in `secondary_fixed_dim` (#3cd7ff).

---

## 6. Do’s and Don’ts

### Do
* **Do** use asymmetrical margins. For example, a headline might be offset further left than the body text to create a dynamic visual path.
* **Do** use "Scale as Impact." A `display-lg` serif quote should be used as a graphic element, not just text.
* **Do** use whitespace as a luxury. If a section feels crowded, increase spacing to `spacing-16` or `20`.

### Don't
* **Don't** use pure black (#000000) for text. Use `on_surface` (#191c1d) to maintain the "ink on paper" softness.
* **Don't** use standard "Box Shadows." If the component doesn't feel elevated through color alone, rethink the surface hierarchy.
* **Don't** use 1px dividers. They clutter the academic clarity. Use vertical space or a subtle background hue change instead.