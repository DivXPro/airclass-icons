// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HazeLineSvg from '@airclass/icons-svg/lib/asn/HazeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HazeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HazeLineSvg}></AntdIcon>;
};

HazeLine.displayName = 'HazeLine';
HazeLine.inheritAttrs = false;
export default HazeLine;