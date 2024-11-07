/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'newsghana.com.gh',
            },
            {
                protocol: 'https',
                hostname: 'telecelgroup.com',
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/newsletter',
                destination: 'https://telcos-five.vercel.app/api/newsletter',
            },
        ];
    },
};

export default nextConfig;
