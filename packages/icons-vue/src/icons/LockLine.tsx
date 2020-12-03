// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockLineSvg from '@airclass/icons-svg/lib/asn/LockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockLineSvg}></AntdIcon>;
};

LockLine.displayName = 'LockLine';
LockLine.inheritAttrs = false;
export default LockLine;