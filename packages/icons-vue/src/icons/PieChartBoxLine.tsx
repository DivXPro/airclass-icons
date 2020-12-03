// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChartBoxLineSvg from '@airclass/icons-svg/lib/asn/PieChartBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartBoxLineSvg}></AntdIcon>;
};

PieChartBoxLine.displayName = 'PieChartBoxLine';
PieChartBoxLine.inheritAttrs = false;
export default PieChartBoxLine;