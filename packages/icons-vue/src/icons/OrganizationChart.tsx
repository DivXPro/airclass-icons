// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OrganizationChartSvg from '@airclass/icons-svg/lib/asn/OrganizationChart';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrganizationChart = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OrganizationChartSvg}></AntdIcon>;
};

OrganizationChart.displayName = 'OrganizationChart';
OrganizationChart.inheritAttrs = false;
export default OrganizationChart;