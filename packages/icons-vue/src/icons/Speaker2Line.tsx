// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Speaker2LineSvg from '@airclass/icons-svg/lib/asn/Speaker2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Speaker2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Speaker2LineSvg}></AntdIcon>;
};

Speaker2Line.displayName = 'Speaker2Line';
Speaker2Line.inheritAttrs = false;
export default Speaker2Line;