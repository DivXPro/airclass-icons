// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Compass3LineSvg from '@airclass/icons-svg/lib/asn/Compass3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Compass3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Compass3LineSvg}></AntdIcon>;
};

Compass3Line.displayName = 'Compass3Line';
Compass3Line.inheritAttrs = false;
export default Compass3Line;