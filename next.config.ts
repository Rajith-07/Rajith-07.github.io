import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  Boolean(repoName) &&
  !repoName.endsWith(".github.io");
const derivedBasePath = isProjectPage ? `/${repoName}` : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? derivedBasePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
