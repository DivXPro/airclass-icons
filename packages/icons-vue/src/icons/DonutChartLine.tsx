// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DonutChartLineSvg from '@airclass/icons-svg/lib/asn/DonutChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DonutChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DonutChartLineSvg}></AntdIcon>;
};

DonutChartLine.displayName = 'DonutChartLine';
DonutChartLine.inheritAttrs = false;
export default DonutChartLine;