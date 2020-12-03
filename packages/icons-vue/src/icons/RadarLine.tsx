// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadarLineSvg from '@airclass/icons-svg/lib/asn/RadarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarLineSvg}></AntdIcon>;
};

RadarLine.displayName = 'RadarLine';
RadarLine.inheritAttrs = false;
export default RadarLine;