// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Safe2LineSvg from '@airclass/icons-svg/lib/asn/Safe2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Safe2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Safe2LineSvg}></AntdIcon>;
};

Safe2Line.displayName = 'Safe2Line';
Safe2Line.inheritAttrs = false;
export default Safe2Line;