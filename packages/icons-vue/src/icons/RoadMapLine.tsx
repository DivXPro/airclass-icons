// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RoadMapLineSvg from '@airclass/icons-svg/lib/asn/RoadMapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoadMapLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoadMapLineSvg}></AntdIcon>;
};

RoadMapLine.displayName = 'RoadMapLine';
RoadMapLine.inheritAttrs = false;
export default RoadMapLine;