// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageFillSvg from '@airclass/icons-svg/lib/asn/ImageFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageFillSvg}></AntdIcon>;
};

ImageFill.displayName = 'ImageFill';
ImageFill.inheritAttrs = false;
export default ImageFill;