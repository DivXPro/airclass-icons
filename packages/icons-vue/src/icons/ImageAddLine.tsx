// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageAddLineSvg from '@airclass/icons-svg/lib/asn/ImageAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageAddLineSvg}></AntdIcon>;
};

ImageAddLine.displayName = 'ImageAddLine';
ImageAddLine.inheritAttrs = false;
export default ImageAddLine;