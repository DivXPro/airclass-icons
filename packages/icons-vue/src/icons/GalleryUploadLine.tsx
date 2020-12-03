// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GalleryUploadLineSvg from '@airclass/icons-svg/lib/asn/GalleryUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GalleryUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryUploadLineSvg}></AntdIcon>;
};

GalleryUploadLine.displayName = 'GalleryUploadLine';
GalleryUploadLine.inheritAttrs = false;
export default GalleryUploadLine;