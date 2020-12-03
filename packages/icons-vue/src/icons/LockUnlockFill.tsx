// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockUnlockFillSvg from '@airclass/icons-svg/lib/asn/LockUnlockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockUnlockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockUnlockFillSvg}></AntdIcon>;
};

LockUnlockFill.displayName = 'LockUnlockFill';
LockUnlockFill.inheritAttrs = false;
export default LockUnlockFill;