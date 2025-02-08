# WOWJOB UI CSS – The Zero-Build-Time, Flexible CSS Utility Library

Welcome to **WOWJOB UI CSS**! This library is designed to bring **simplicity**, **speed**, and **flexibility** to your styling workflow. Whether you’re building with **vanilla JS**, **HTML/CSS**, **React**, **Next.js**, **Vite**, **Astro**, or any other framework or library, **WOWJOB UI CSS** will slip in seamlessly with **zero build time** or extra configuration.

If you **know CSS**, you already know how to use **WOWJOB UI CSS**. Gone are the days of steep learning curves, complicated configuration files, or puzzling build steps. In just **1–2 minutes**, you can get up and running with a **mobile-first approach** for responsive web design (RWD), an **outstanding developer experience** (DX), and a supercharged debugging workflow (thank you, autocomplete!). This README is your comprehensive guide, designed to help you kickstart your journey with WOWJOB UI CSS.

---

## Table of Contents

1. **[Key Features](#key-features)**
2. **[Why WOWJOB UI CSS?](#why-wowjob-ui-css)**
3. **[Installation](#installation)**
4. **[Getting Started](#getting-started)**
5. **[Usage Examples](#usage-examples)**
   - [Reusable component](#reusable-component)
   - [Zero Configuration](#zero-configuration)
   - [Mobile-First Responsiveness](#mobile-first-responsiveness)
   - [Working with Next.js](#working-with-nextjs)
6. **[API Overview](#api-overview)**
   - [`getStyle(config)`](#getstyleconfig)
7. **[Tips & Tricks](#tips--tricks)**
8. **[FAQ](#faq)**
9. **[Roadmap](#roadmap)**
10. **[Contributing](#contributing)**
11. **[License](#license)**

---

## Key Features

- **Zero Build Time**  
  No bundlers, no watchers—just drop in **WOWJOB UI CSS** and go. Use your favorite tools without adding any extra step in your CI or local dev environment.

- **Works with Any Framework or Library**  
  Enjoy using WOWJOB UI CSS in **Vanilla JS**, **HTML/CSS**, **React**, **Next.js**, **Vite**, **Astro**, **Svelte**, **Vue**, or even a homegrown setup.

- **Best DX and Debugging Experience**  
  Autocomplete your CSS properties (depending on your editor/IDE) and debug with minimal overhead. Work the same way you do in regular CSS.

- **Mobile-First Approach**  
  All your styles adapt seamlessly to different devices. Design for the smallest screens first, and then add desktop (or any other device) overrides.

- **Minimal to No Configuration**  
  **WOWJOB UI CSS** doesn’t require complicated config files. Just install and start styling. It’s that easy.

- **1–2 Minutes to Learn**  
  If you know CSS, you already know **WOWJOB UI CSS**. Transition from standard CSS or other utility-based libraries with minimal friction.

- **Flexible and Extensible**  
  The library is designed to let you easily compose class names or inline styles. Extend or customize it as you see fit.

- **Works with Client & Server Components**  
  Perfect for universal JavaScript ecosystems—no matter where your components are rendered.

- **Utility to Return Class Names and Styles**  
  Concentrate on creating style data. Let **WOWJOB UI CSS** generate the right classes and inline styles automatically.

---

## Why WOWJOB UI CSS?

**WOWJOB UI CSS** strikes a balance between **utility-first** and classic **CSS**. By providing an intuitive API that aligns with how you already write your styles, WOWJOB UI CSS helps you:

- **Write Less, Do More**: Eliminate boilerplate code.
- **Focus on Design**: Stop wrestling with build configs.
- **Move Quickly**: Achieve more in less time.

No matter how large or small your project is, WOWJOB UI CSS is a safe, scalable choice that suits everything from prototypes to production builds.

---

## Installation

Pick your favorite package manager:

    # npm
    npm install @wowjob/ui-css

    # bun
    bun install @wowjob/ui-css

    # pnpm
    pnpm install @wowjob/ui-css

That’s it. You’re good to go—no additional setup required.

---

## Getting Started

1. **Install** WOWJOB UI CSS with your favorite package manager (see [Installation](#installation)).
2. **Import** one of the provided CSS files (`reset.css`, `all.css`, or `all.min.css`) in your entry point (e.g., `index.js` or `layout.tsx` in Next.js).
3. **Utilize** the `getStyle` utility to effortlessly transform your style definitions into class names and inline styles.

---

## Usage Examples

### Reusable Component

Let's have a look at a reusable component, such as a box container that we can use to wrap children, and position them the way we want.

#### flex.tsx

```typescript:
import { createElement } from 'react'
import type { TFlex } from './type'
import { getStyle, type TEnv } from '@wowjob/ui-css'

export const Flex = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  as = 'div',
  ...rest
}: TFlex) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wow-ui-flex',
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  const Component = createElement(
    as,
    {
      className,
      style,
      ...rest,
    },
    children
  )

  return Component
}
```

#### type.ts

```typescript:
import type { TStyle } from '@wowjob/ui-css'
import type { AllHTMLAttributes } from 'react'

export const boxAs = [
  'div',
  'main',
  'section',
  'article',
  'aside',
  'header',
  'footer',
  'nav',
  'figure',
  'figcaption',
  'details',
  'summary',
  'ul',
  'ol',
  'dl',
  'table',
  'caption',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'td',
  'th',
  'colgroup',
  'col',
  'span',
] as const

export type TBoxAs = (typeof boxAs)[number]

export type TFlex = {
  as?: TBoxAs
} & TStyle &
  AllHTMLAttributes<HTMLElement>
```

#### page.tsx

```typescript:
...
  <Flex as="main" mobile={{ padding: 16, maxWidth: 1280, width: '100%' }}>
    <Flex as="aside" theme="brand">
      This is child 1
    </Flex>

    <Flex as="article" theme="light">
      <Flex as="header">
        <Text as="h1">Main article title</Text>
        <Text>This is a paragraph</Text>
      </Flex>

      <Flex as="section">
        <Text as="h1">This is a sub-title</Text>
        <Text>This is another paragraph</Text>
      </Flex>
    </Flex>

    <Flex as="footer" theme="secondary">
      &copy; 2025 - Wow Job
    </Flex>
  </Flex>
...
```

### Zero Configuration

All you need is to import the base resets and (optionally) the global styles. You can do this in any framework without additional setup. For instance, in a plain HTML file:

    <!-- index.html -->
    <html>
      <head>
        <link rel="stylesheet" href="node_modules/@wowjob/ui-css/reset.css" />
        <link rel="stylesheet" href="node_modules/@wowjob/ui-css/all.css" />
      </head>

      <body id="wow-ui">
        <div id="app">Hello World!</div>
        <script type="module">
          import { getStyle } from './node_modules/@wowjob/ui-css/index.js';
          // use getStyle here...
        </script>
      </body>
    </html>

No bundler or special config needed—**zero build time**.

### Mobile-First Responsiveness

Define your **mobile** and **desktop** style properties separately. WOWJOB UI CSS merges them internally for a seamless responsive layout:

    import { getStyle } from '@wowjob/ui-css';

    const { className, style } = getStyle({
      mobile: {
        padding: '10px',
        backgroundColor: 'lightblue',
      },
      desktop: {
        padding: '20px',
        backgroundColor: 'lightgreen',
      },
    });

    // Use 'className' and 'style' in your JSX or standard HTML

### Working with Next.js

Below is a typical Next.js `layout.tsx` example that demonstrates how to import WOWJOB UI CSS CSS and apply styles:

    // layout.tsx
    import '@wowjob/ui-css/reset.css'
    // development version
    import '@wowjob/ui-css/all.css'
    // production version
    // import '@wowjob/ui-css/all.min.css'
    import type { ReactNode } from 'react'

    const RootLayout = ({
      children,
    }: Readonly<{
      children: ReactNode
    }>) => {
      return (
        <html lang="en">
          <body id="wow-ui">{children}</body>
        </html>
      )
    }

    export default RootLayout

Then in your page component:

    // page.tsx or Home.tsx
    import { getStyle } from '@wowjob/ui-css';

    export default function Home() {
      const { className, style } = getStyle({
        mobile: {
          border: {
            width: 4,
            style: 'dotted',
            color: 'blue',
          },
          padding: 20,
        },
        env: 'prod',
      });

      return (
        <div>
          <div className={className} style={style}>
            <h1>Simple example</h1>
            <div
              {...getStyle({
                mobile: {
                  border: '8px solid pink',
                  padding: 80,
                },
                env: 'prod',
              })}
            >
              <h2>It gets better</h2>
              <div
                {...getStyle({
                  mobile: {
                    border: '4px solid red',
                    padding: 16,
                  },
                  desktop: {
                    border: '12px solid green',
                    padding: 32,
                    borderRadius: 20,
                  },
                  env: 'prod',
                })}
              >
                <h3>Happy coding!</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }

This example shows how straightforward it is to integrate **WOWJOB UI CSS** in a modern setup.

---

## API Overview

The core of WOWJOB UI CSS is the `getStyle` function:

### `getStyle(config)`

- **config**: An object specifying style properties for different breakpoints or environments.

`getStyle` returns an object containing:

- **className**: A string of class names automatically generated from your style definitions.
- **style**: Inline style declarations.

You can apply these to JSX elements using the React spread operator:

    <div {...getStyle({ mobile: { padding: '10px' } })} />

Or by destructuring:

    const { className, style } = getStyle({ mobile: { margin: '1rem' } });
    <div className={className} style={style} />

**Note**: The exact structure of `config` can accommodate advanced usage, including nested objects, shorthands, or environment-specific logic.

---

## Tips & Tricks

1. **Focus on Mobile First**: Under the `mobile` key, define your base styles. Then override under `desktop`, `tablet`, or any other custom breakpoint if you prefer.
2. **Production vs. Development**:
   - **Development**: Use `all.css` for human-readable class names and easier debugging.
   - **Production**: Use `all.min.css` for compressed class names to optimize performance.
3. **Dynamic Styles**: You can dynamically generate styles based on state or props—just call `getStyle` inside your functional components or hooks.
4. **No Rebuild**: Since WOWJOB UI CSS works out of the box, you don’t need to wait for a bundler or dev server to recompile style changes.

---

## FAQ

**Q: Do I need PostCSS, Webpack, or any build tool?**  
A: Not at all. WOWJOB UI CSS is designed to be used with zero build configuration—just install and import.

**Q: Can I override or extend the provided resets and global styles?**  
A: Yes, simply create your own CSS file and import it after `reset.css` and `all.css` to override default rules.

**Q: Does it support server-side rendering (SSR)?**  
A: Absolutely. WOWJOB UI CSS works flawlessly in SSR setups (e.g., Next.js or custom Node.js servers), and it’s safe to use in both client and server components.

---

## Roadmap

- **Additional Breakpoint Support**: Let developers define custom breakpoints on the fly.
- **TypeScript Enhancements**: Expand types for even better IntelliSense and autocomplete.
- **Plugin Ecosystem**: Provide a standard way to create community-driven plugins and enhancers.

Stay tuned for updates and community contributions!

---

## Contributing

We welcome contributions of all kinds:

- **Bug Reports & Feature Requests**: Use the issue tracker on the repo.
- **Pull Requests**: Fork the project, make changes, and submit a PR.
- **Feedback**: Share your use cases and suggestions. We’re always listening.

---

## License

WOWJOB UI CSS is licensed under the **MIT License**. Feel free to use it in personal and commercial projects. Refer to the `LICENSE` file in the repository for more details.

---

Thank you for using **WOWJOB UI CSS**. We hope it simplifies your styling and boosts productivity. If you have any questions, suggestions, or simply want to share what you built, feel free to reach out or open a PR. Happy coding!
