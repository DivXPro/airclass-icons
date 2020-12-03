// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Bus2LineSvg from '@airclass/icons-svg/lib/asn/Bus2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Bus2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bus2LineSvg}></AntdIcon>;
};

Bus2Line.displayName = 'Bus2Line';
Bus2Line.inheritAttrs = false;
export default Bus2Line;