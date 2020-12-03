// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RoadsterLineSvg from '@airclass/icons-svg/lib/asn/RoadsterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoadsterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoadsterLineSvg}></AntdIcon>;
};

RoadsterLine.displayName = 'RoadsterLine';
RoadsterLine.inheritAttrs = false;
export default RoadsterLine;