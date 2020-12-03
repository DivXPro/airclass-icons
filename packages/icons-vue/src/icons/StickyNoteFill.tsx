// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StickyNoteFillSvg from '@airclass/icons-svg/lib/asn/StickyNoteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StickyNoteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickyNoteFillSvg}></AntdIcon>;
};

StickyNoteFill.displayName = 'StickyNoteFill';
StickyNoteFill.inheritAttrs = false;
export default StickyNoteFill;