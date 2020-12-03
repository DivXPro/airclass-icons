// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LockPasswordLineSvg from '@airclass/icons-svg/lib/asn/LockPasswordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockPasswordLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockPasswordLineSvg}></AntdIcon>;
};

LockPasswordLine.displayName = 'LockPasswordLine';
LockPasswordLine.inheritAttrs = false;
export default LockPasswordLine;