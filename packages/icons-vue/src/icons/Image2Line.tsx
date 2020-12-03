// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Image2LineSvg from '@airclass/icons-svg/lib/asn/Image2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Image2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Image2LineSvg}></AntdIcon>;
};

Image2Line.displayName = 'Image2Line';
Image2Line.inheritAttrs = false;
export default Image2Line;