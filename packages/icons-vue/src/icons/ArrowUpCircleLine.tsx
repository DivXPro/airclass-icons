// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpCircleLineSvg from '@airclass/icons-svg/lib/asn/ArrowUpCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpCircleLineSvg}></AntdIcon>;
};

ArrowUpCircleLine.displayName = 'ArrowUpCircleLine';
ArrowUpCircleLine.inheritAttrs = false;
export default ArrowUpCircleLine;