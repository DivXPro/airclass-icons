// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockFillSvg from '@airclass/icons-svg/lib/asn/LockFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockFillSvg}></AntdIcon>;
};

LockFill.displayName = 'LockFill';
LockFill.inheritAttrs = false;
export default LockFill;