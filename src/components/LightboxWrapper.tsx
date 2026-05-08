import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

interface LightboxWrapperProps {
  index: number;
  open: boolean;
  close: () => void;
  slides: { src: string; title?: string; description?: string }[];
}

const LightboxWrapper: React.FC<LightboxWrapperProps> = ({ index, open, close, slides }) => {
  return (
    <Lightbox
      index={index}
      open={open}
      close={close}
      slides={slides}
      plugins={[Zoom, Thumbnails, Fullscreen]}
      zoom={{ maxZoomPixelRatio: 3 }}
      render={{
        buttonPrev: slides.length <= 1 ? () => null : undefined,
        buttonNext: slides.length <= 1 ? () => null : undefined,
      }}
    />
  );
};

export default LightboxWrapper;
