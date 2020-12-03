// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Battery2LineSvg from '@airclass/icons-svg/lib/asn/Battery2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Battery2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery2LineSvg}></AntdIcon>;
};

Battery2Line.displayName = 'Battery2Line';
Battery2Line.inheritAttrs = false;
export default Battery2Line;