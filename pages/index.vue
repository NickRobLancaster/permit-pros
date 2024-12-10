<script setup>
// pageMeta
const pageMeta = {
  title: "Home",
  description: "Home page description",
  keywords: "home, page, description",
  image: "https://example.com/image.jpg",
  url: "https://example.com",
  type: "website",
  site_name: "Example",
  locale: "en",
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
  },
  og: {
    title: "Home",
    description: "Home page description",
    image: "https://example.com/image.jpg",
    url: "https://example.com",
    type: "website",
    site_name: "Example",
  },
};
</script>

<template>
  <div>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Permit Pros</h1>
          <p class="py-6">
            Your Partner in Simplifying Residential Permits From pools and
            patios to remodels and ADUs, we take the hassle out of permitting.
            Our team delivers construction-ready documents and secures fast
            approvals, ensuring your project moves forward without delay.
          </p>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>
