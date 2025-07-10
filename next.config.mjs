/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig = {
     images: {
        domains: ['fakestoreapi.com'],
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);


