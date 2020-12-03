// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DashboardFillSvg from '@airclass/icons-svg/lib/asn/DashboardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardFillSvg}></AntdIcon>;
};

DashboardFill.displayName = 'DashboardFill';
DashboardFill.inheritAttrs = false;
export default DashboardFill;