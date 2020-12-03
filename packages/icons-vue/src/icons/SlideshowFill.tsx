// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlideshowFillSvg from '@airclass/icons-svg/lib/asn/SlideshowFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlideshowFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlideshowFillSvg}></AntdIcon>;
};

SlideshowFill.displayName = 'SlideshowFill';
SlideshowFill.inheritAttrs = false;
export default SlideshowFill;