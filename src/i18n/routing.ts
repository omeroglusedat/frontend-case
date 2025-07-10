import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    pathnames: {
        '/products': {
            'tr': "/urunler",
            'en': "/products"
        },
        '/products/[productId]': {
            "tr": "/urunler/[productId]",
            "en": "/product/[productId]"
        }
    }
});