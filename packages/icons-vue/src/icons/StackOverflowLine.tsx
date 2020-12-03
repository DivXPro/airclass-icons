// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StackOverflowLineSvg from '@airclass/icons-svg/lib/asn/StackOverflowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StackOverflowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StackOverflowLineSvg}></AntdIcon>;
};

StackOverflowLine.displayName = 'StackOverflowLine';
StackOverflowLine.inheritAttrs = false;
export default StackOverflowLine;