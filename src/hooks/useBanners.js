import { getBannerData } from '@/apis/getBannerDataAPI';
import { useEffect, useState } from 'react';

export function useBanners(ids) {
  const [banners, setBanners] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const promises = ids.map((id) => getBannerData(id));
      const results = await Promise.allSettled(promises);

      const loaded = results
        .filter((r) => r.status === 'fulfilled')
        .map((r) => {
          const { id, title, description, images } = r.value;
          const words = title.split(' ');
          return {
            id,
            titlePrefix: words.slice(0, -1).join(' '),
            titleLast: words.slice(-1),
            desc: description.split(',')[0] || description,
            image: images?.at(-1),
          };
        });
      setBanners(loaded);

      const errs = results.filter((r) => r.status === 'rejected').map((r) => r.reason);
      setErrors(errs);
    }

    fetchAll();
  }, [ids]);

  return { banners, errors };
}
