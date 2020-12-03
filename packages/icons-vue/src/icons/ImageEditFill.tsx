// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageEditFillSvg from '@airclass/icons-svg/lib/asn/ImageEditFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageEditFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageEditFillSvg}></AntdIcon>;
};

ImageEditFill.displayName = 'ImageEditFill';
ImageEditFill.inheritAttrs = false;
export default ImageEditFill;