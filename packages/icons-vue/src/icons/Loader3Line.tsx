// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Loader3LineSvg from '@airclass/icons-svg/lib/asn/Loader3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Loader3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Loader3LineSvg}></AntdIcon>;
};

Loader3Line.displayName = 'Loader3Line';
Loader3Line.inheritAttrs = false;
export default Loader3Line;