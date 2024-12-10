<script setup></script>
<template>
  <div class="fixed top-0 left-0 navbar bg-base-100 z-20">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Permit Pros</a>
    </div>

    <ThemeSwitcher />
    <div class="flex flex-row items-center">
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 max-sm:hidden">
          <!-- nuxt link root -->
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <!-- nuxt link about -->
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <!-- nuxt link contact -->
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <!-- nuxt link services -->
          <li>
            <nuxt-link to="/services">Services</nuxt-link>
          </li>
          <!-- nuxt link blog -->
          <li>
            <nuxt-link to="/faq">FAQ's</nuxt-link>
          </li>
          <li>
            <details>
              <summary>Submit Project</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li>
                  <nuxt-link to="/forms/licensed-professional"
                    >Licensed Professional</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/forms/owner-builder"
                    >Owner / Builder</nuxt-link
                  >
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <!-- end buttons -->
      <div>
        <!-- <XSidebar /> -->
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
