// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDownCircleLineSvg from '@airclass/icons-svg/lib/asn/ArrowDownCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownCircleLineSvg}></AntdIcon>;
};

ArrowDownCircleLine.displayName = 'ArrowDownCircleLine';
ArrowDownCircleLine.inheritAttrs = false;
export default ArrowDownCircleLine;