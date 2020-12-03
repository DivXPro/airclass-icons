// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackFillSvg from '@airclass/icons-svg/lib/asn/StackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackFillSvg}></AntdIcon>;
};

StackFill.displayName = 'StackFill';
StackFill.inheritAttrs = false;
export default StackFill;