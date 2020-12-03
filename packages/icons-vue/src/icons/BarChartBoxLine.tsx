// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarChartBoxLineSvg from '@airclass/icons-svg/lib/asn/BarChartBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarChartBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarChartBoxLineSvg}></AntdIcon>;
};

BarChartBoxLine.displayName = 'BarChartBoxLine';
BarChartBoxLine.inheritAttrs = false;
export default BarChartBoxLine;