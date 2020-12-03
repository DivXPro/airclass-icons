// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineChartFillSvg from '@airclass/icons-svg/lib/asn/LineChartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineChartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineChartFillSvg}></AntdIcon>;
};

LineChartFill.displayName = 'LineChartFill';
LineChartFill.inheritAttrs = false;
export default LineChartFill;