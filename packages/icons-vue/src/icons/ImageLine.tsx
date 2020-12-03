// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageLineSvg from '@airclass/icons-svg/lib/asn/ImageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageLineSvg}></AntdIcon>;
};

ImageLine.displayName = 'ImageLine';
ImageLine.inheritAttrs = false;
export default ImageLine;