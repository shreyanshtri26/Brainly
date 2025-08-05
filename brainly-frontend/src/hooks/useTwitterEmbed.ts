import { useEffect, RefObject } from 'react';


declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}


export const useTwitterEmbed = (ref: RefObject<HTMLElement>, isTwitter: boolean) => {
  useEffect(() => {
    if (isTwitter) {
      const interval = setInterval(() => {
        if (window.twttr?.widgets?.load && ref.current) {
          window.twttr.widgets.load(ref.current);
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isTwitter, ref]);
};
