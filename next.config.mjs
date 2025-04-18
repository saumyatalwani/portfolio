import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote']
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
})
   
  // Merge MDX config with Next.js config
export default withMDX(nextConfig)

//export default nextConfig;

