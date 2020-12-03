// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RotateLockLineSvg from '@airclass/icons-svg/lib/asn/RotateLockLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RotateLockLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLockLineSvg}></AntdIcon>;
};

RotateLockLine.displayName = 'RotateLockLine';
RotateLockLine.inheritAttrs = false;
export default RotateLockLine;