###### Front End Case

## 🔧 Tech Stack
```bash
- React (Next.js 14 App Router)
- TypeScript
- MUI 
- Redux Toolkit
- next-intl
- Jest
```

## 🚀 Installation

```bash
git clone https://github.com/omeroglusedat/frontend-case.git
cd frontend-case
npm install
npm run dev
```

## ✨ Features

- 🔍 Product listing and filtering
- 🛒 Basket
- 🧩 Atomic design structure
- 🔺 Multi language with path
- 🌐 Responsive UI with MUI

## 🃏 Test (Jest)
```bash 
"jsx": "preserve" -> "jsx": "react-jsx"
yarn test

PASS  src/components/molecules/fec-basket-count.test.tsx
PASS  src/components/molecules/fec-pagination.test.tsx
PASS  src/components/molecules/fec-product-card.test.tsx
PASS  src/components/molecules/fec-sort-price.test.tsx

Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.464 s
Ran all test suites.
Done in 4.47s.
```
## 📊 LightHouse Report
```bash 
    - 🚀 Performance: 67
    - ♿ Accessibility: 100
    - 🛠️ Best Practices: 96
    - 🔍 SEO: 100
```


## 📁 Folder Structure

```bash
next-env.d.ts
next.config.mjs
package.json
README.md
tsconfig.json
messages/
  en.json
  tr.json
src/
  middleware.ts
  app/
    favicon.ico
    layout.tsx
    providers.tsx
    [locale]/
      products/
        page.tsx
        [productId]/
          page.tsx
  components/
    atoms/
      fec-button.tsx
      fec-container.tsx
      fec-input.tsx
      fec-pagination-item.tsx
      fec-product-image.tsx
      fec-slider-range.tsx
      fec-typo.tsx
      fex-select.tsx
    molecules/
      fec-add-basket-button.tsx
      fec-basket-count.tsx
      fec-category-filter.tsx
      fec-clear-filter.tsx
      fec-nav-bar.tsx
      fec-pagination.tsx
      fec-product-card.tsx
      fec-sort-price.tsx
    organisms/
      filters-area.tsx
      product-detail.tsx
      product-list.tsx
      products-container.tsx
  hooks/
    useResponsive.ts
  i18n/
    navigation.ts
    request.ts
    routing.ts
  redux/
    product-slice.ts
    store.ts
  theme/
    theme.ts
```






