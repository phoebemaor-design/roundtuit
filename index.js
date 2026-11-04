export default {
  async fetch(request, env, ctx) {
    // 1. Put your existing website's live link here
    const upstreamUrl = "https://roundtuitconsulting.com/"; 

    // 2. This grabs the page from your existing link
    const response = await fetch(upstreamUrl);

    // 3. This serves it directly to your visitors on your Cloudflare route
    return new Response(response.body, response);
  },
};
