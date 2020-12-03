// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChartLineSvg from '@airclass/icons-svg/lib/asn/PieChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartLineSvg}></AntdIcon>;
};

PieChartLine.displayName = 'PieChartLine';
PieChartLine.inheritAttrs = false;
export default PieChartLine;