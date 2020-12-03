// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Dashboard3LineSvg from '@airclass/icons-svg/lib/asn/Dashboard3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Dashboard3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Dashboard3LineSvg}></AntdIcon>;
};

Dashboard3Line.displayName = 'Dashboard3Line';
Dashboard3Line.inheritAttrs = false;
export default Dashboard3Line;