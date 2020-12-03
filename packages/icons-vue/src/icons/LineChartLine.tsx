// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineChartLineSvg from '@airclass/icons-svg/lib/asn/LineChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineChartLineSvg}></AntdIcon>;
};

LineChartLine.displayName = 'LineChartLine';
LineChartLine.inheritAttrs = false;
export default LineChartLine;