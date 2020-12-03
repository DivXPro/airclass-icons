// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BubbleChartLineSvg from '@airclass/icons-svg/lib/asn/BubbleChartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BubbleChartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleChartLineSvg}></AntdIcon>;
};

BubbleChartLine.displayName = 'BubbleChartLine';
BubbleChartLine.inheritAttrs = false;
export default BubbleChartLine;