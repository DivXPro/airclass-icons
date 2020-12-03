// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageAddFillSvg from '@airclass/icons-svg/lib/asn/ImageAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageAddFillSvg}></AntdIcon>;
};

ImageAddFill.displayName = 'ImageAddFill';
ImageAddFill.inheritAttrs = false;
export default ImageAddFill;