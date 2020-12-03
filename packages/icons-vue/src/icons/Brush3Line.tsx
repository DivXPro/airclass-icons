// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Brush3LineSvg from '@airclass/icons-svg/lib/asn/Brush3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Brush3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3LineSvg}></AntdIcon>;
};

Brush3Line.displayName = 'Brush3Line';
Brush3Line.inheritAttrs = false;
export default Brush3Line;