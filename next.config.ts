import type { NextConfig } from "next";

const allowedDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  allowedDevOrigins: allowedDevOrigins.length
    ? allowedDevOrigins
    : ["http://192.168.15.135:3000"],
};

export default nextConfig;
