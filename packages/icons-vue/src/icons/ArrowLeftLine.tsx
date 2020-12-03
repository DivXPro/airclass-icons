// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowLeftLineSvg from '@airclass/icons-svg/lib/asn/ArrowLeftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftLineSvg}></AntdIcon>;
};

ArrowLeftLine.displayName = 'ArrowLeftLine';
ArrowLeftLine.inheritAttrs = false;
export default ArrowLeftLine;