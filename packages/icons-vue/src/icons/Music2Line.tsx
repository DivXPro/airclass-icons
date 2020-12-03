// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Music2LineSvg from '@airclass/icons-svg/lib/asn/Music2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Music2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Music2LineSvg}></AntdIcon>;
};

Music2Line.displayName = 'Music2Line';
Music2Line.inheritAttrs = false;
export default Music2Line;