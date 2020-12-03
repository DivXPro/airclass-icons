// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubwayLineSvg from '@airclass/icons-svg/lib/asn/SubwayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubwayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubwayLineSvg}></AntdIcon>;
};

SubwayLine.displayName = 'SubwayLine';
SubwayLine.inheritAttrs = false;
export default SubwayLine;