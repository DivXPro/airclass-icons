// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Building2LineSvg from '@airclass/icons-svg/lib/asn/Building2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Building2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building2LineSvg}></AntdIcon>;
};

Building2Line.displayName = 'Building2Line';
Building2Line.inheritAttrs = false;
export default Building2Line;