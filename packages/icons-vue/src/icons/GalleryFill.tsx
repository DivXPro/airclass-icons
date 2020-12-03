// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GalleryFillSvg from '@airclass/icons-svg/lib/asn/GalleryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GalleryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryFillSvg}></AntdIcon>;
};

GalleryFill.displayName = 'GalleryFill';
GalleryFill.inheritAttrs = false;
export default GalleryFill;