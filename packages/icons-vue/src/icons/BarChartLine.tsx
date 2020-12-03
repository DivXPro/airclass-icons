// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarChartLineSvg from '@airclass/icons-svg/lib/asn/BarChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarChartLineSvg}></AntdIcon>;
};

BarChartLine.displayName = 'BarChartLine';
BarChartLine.inheritAttrs = false;
export default BarChartLine;