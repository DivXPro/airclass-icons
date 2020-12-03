// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DashboardLineSvg from '@airclass/icons-svg/lib/asn/DashboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardLineSvg}></AntdIcon>;
};

DashboardLine.displayName = 'DashboardLine';
DashboardLine.inheritAttrs = false;
export default DashboardLine;