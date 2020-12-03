// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneLockLineSvg from '@airclass/icons-svg/lib/asn/PhoneLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneLockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneLockLineSvg}></AntdIcon>;
};

PhoneLockLine.displayName = 'PhoneLockLine';
PhoneLockLine.inheritAttrs = false;
export default PhoneLockLine;