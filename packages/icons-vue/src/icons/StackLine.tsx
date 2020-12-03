// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackLineSvg from '@airclass/icons-svg/lib/asn/StackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackLineSvg}></AntdIcon>;
};

StackLine.displayName = 'StackLine';
StackLine.inheritAttrs = false;
export default StackLine;