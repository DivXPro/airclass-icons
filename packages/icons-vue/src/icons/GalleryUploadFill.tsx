// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GalleryUploadFillSvg from '@airclass/icons-svg/lib/asn/GalleryUploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GalleryUploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryUploadFillSvg}></AntdIcon>;
};

GalleryUploadFill.displayName = 'GalleryUploadFill';
GalleryUploadFill.inheritAttrs = false;
export default GalleryUploadFill;