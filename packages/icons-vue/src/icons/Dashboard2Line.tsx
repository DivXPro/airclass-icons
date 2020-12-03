// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Dashboard2LineSvg from '@airclass/icons-svg/lib/asn/Dashboard2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Dashboard2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Dashboard2LineSvg}></AntdIcon>;
};

Dashboard2Line.displayName = 'Dashboard2Line';
Dashboard2Line.inheritAttrs = false;
export default Dashboard2Line;