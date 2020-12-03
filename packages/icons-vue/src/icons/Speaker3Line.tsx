// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Speaker3LineSvg from '@airclass/icons-svg/lib/asn/Speaker3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Speaker3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Speaker3LineSvg}></AntdIcon>;
};

Speaker3Line.displayName = 'Speaker3Line';
Speaker3Line.inheritAttrs = false;
export default Speaker3Line;