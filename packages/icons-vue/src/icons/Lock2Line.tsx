// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Lock2LineSvg from '@airclass/icons-svg/lib/asn/Lock2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Lock2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock2LineSvg}></AntdIcon>;
};

Lock2Line.displayName = 'Lock2Line';
Lock2Line.inheritAttrs = false;
export default Lock2Line;