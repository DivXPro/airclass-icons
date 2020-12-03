// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockPasswordFillSvg from '@airclass/icons-svg/lib/asn/LockPasswordFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockPasswordFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockPasswordFillSvg}></AntdIcon>;
};

LockPasswordFill.displayName = 'LockPasswordFill';
LockPasswordFill.inheritAttrs = false;
export default LockPasswordFill;