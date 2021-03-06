import { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async (request) => {
    return [{ route: `/`, priority: 1 }];
  },
};

export default function Index() {
  return (
    <div>
      <h1>Stratas NFT</h1>
      <p>Exclusive NFT collection for a luxury experience.</p>
    </div>
  );
}
