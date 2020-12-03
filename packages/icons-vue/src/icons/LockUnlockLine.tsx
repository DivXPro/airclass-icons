// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockUnlockLineSvg from '@airclass/icons-svg/lib/asn/LockUnlockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockUnlockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockUnlockLineSvg}></AntdIcon>;
};

LockUnlockLine.displayName = 'LockUnlockLine';
LockUnlockLine.inheritAttrs = false;
export default LockUnlockLine;