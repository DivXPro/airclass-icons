// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ImageEditLineSvg from '@airclass/icons-svg/lib/asn/ImageEditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageEditLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImageEditLineSvg}></AntdIcon>;
};

ImageEditLine.displayName = 'ImageEditLine';
ImageEditLine.inheritAttrs = false;
export default ImageEditLine;