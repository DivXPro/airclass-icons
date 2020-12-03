// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Building4LineSvg from '@airclass/icons-svg/lib/asn/Building4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Building4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4LineSvg}></AntdIcon>;
};

Building4Line.displayName = 'Building4Line';
Building4Line.inheritAttrs = false;
export default Building4Line;