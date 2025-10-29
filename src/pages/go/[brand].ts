import type { APIRoute } from 'astro';
import { affiliateLinks } from '../../data/affiliateLinks';

export const prerender = false;

export const GET: APIRoute = ({ params, request }) => {
  const brand = params.brand;

  if (!brand || !affiliateLinks[brand]) {
    return new Response('Brand not found', { status: 404 });
  }

  const affiliateUrl = affiliateLinks[brand];

  // Get referrer for analytics
  const referrer = request.headers.get('referer') || 'direct';

  // Log the click (you could send this to your analytics service)
  console.log(`Affiliate click: ${brand} from ${referrer}`);

  // Return 307 temporary redirect
  return new Response(null, {
    status: 307,
    headers: {
      Location: affiliateUrl,
    },
  });
};

// Generate static paths for all brands (optional, for SSG)
export async function getStaticPaths() {
  const brands = Object.keys(affiliateLinks);

  return brands.map((brand) => ({
    params: { brand },
  }));
}
