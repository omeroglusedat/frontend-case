import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    pathnames: {
        '/products/[pageNumber]': {
            'tr': "/urunler/[pageNumber]",
            'en': "/products/[pageNumber]"
        },
        '/products/[pageNumber]/[productId]': {
            "tr": "/urunler/[pageNumber]/[productId]",
            "en": "/product/[pageNumber]/[productId]"
        }
    }
});