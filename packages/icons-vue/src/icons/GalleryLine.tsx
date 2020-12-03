// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GalleryLineSvg from '@airclass/icons-svg/lib/asn/GalleryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GalleryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryLineSvg}></AntdIcon>;
};

GalleryLine.displayName = 'GalleryLine';
GalleryLine.inheritAttrs = false;
export default GalleryLine;