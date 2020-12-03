// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlowChartSvg from '@airclass/icons-svg/lib/asn/FlowChart';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlowChart = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlowChartSvg}></AntdIcon>;
};

FlowChart.displayName = 'FlowChart';
FlowChart.inheritAttrs = false;
export default FlowChart;