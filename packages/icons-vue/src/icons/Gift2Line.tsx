// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Gift2LineSvg from '@airclass/icons-svg/lib/asn/Gift2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Gift2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gift2LineSvg}></AntdIcon>;
};

Gift2Line.displayName = 'Gift2Line';
Gift2Line.inheritAttrs = false;
export default Gift2Line;