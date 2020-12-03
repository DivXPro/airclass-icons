// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StickyNote2LineSvg from '@airclass/icons-svg/lib/asn/StickyNote2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StickyNote2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickyNote2LineSvg}></AntdIcon>;
};

StickyNote2Line.displayName = 'StickyNote2Line';
StickyNote2Line.inheritAttrs = false;
export default StickyNote2Line;