// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import More2LineSvg from '@airclass/icons-svg/lib/asn/More2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const More2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2LineSvg}></AntdIcon>;
};

More2Line.displayName = 'More2Line';
More2Line.inheritAttrs = false;
export default More2Line;