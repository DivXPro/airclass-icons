// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Eye2LineSvg from '@airclass/icons-svg/lib/asn/Eye2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Eye2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Eye2LineSvg}></AntdIcon>;
};

Eye2Line.displayName = 'Eye2Line';
Eye2Line.inheritAttrs = false;
export default Eye2Line;