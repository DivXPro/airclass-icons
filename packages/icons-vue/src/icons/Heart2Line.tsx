// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Heart2LineSvg from '@airclass/icons-svg/lib/asn/Heart2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heart2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Heart2LineSvg}></AntdIcon>;
};

Heart2Line.displayName = 'Heart2Line';
Heart2Line.inheritAttrs = false;
export default Heart2Line;