// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Ship2LineSvg from '@airclass/icons-svg/lib/asn/Ship2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Ship2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ship2LineSvg}></AntdIcon>;
};

Ship2Line.displayName = 'Ship2Line';
Ship2Line.inheritAttrs = false;
export default Ship2Line;