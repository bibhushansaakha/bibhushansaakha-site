import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are locally controlled and already reasonably sized.
    // Skips the managed optimization pipeline entirely — one less moving
    // part, and no Image Optimization quota spent on a personal site.
    unoptimized: true,
  },
};

export default nextConfig;
