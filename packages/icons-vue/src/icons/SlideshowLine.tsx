// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlideshowLineSvg from '@airclass/icons-svg/lib/asn/SlideshowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlideshowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlideshowLineSvg}></AntdIcon>;
};

SlideshowLine.displayName = 'SlideshowLine';
SlideshowLine.inheritAttrs = false;
export default SlideshowLine;