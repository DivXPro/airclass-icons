// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Ghost2LineSvg from '@airclass/icons-svg/lib/asn/Ghost2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Ghost2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ghost2LineSvg}></AntdIcon>;
};

Ghost2Line.displayName = 'Ghost2Line';
Ghost2Line.inheritAttrs = false;
export default Ghost2Line;