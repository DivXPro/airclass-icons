// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowRightLineSvg from '@airclass/icons-svg/lib/asn/ArrowRightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightLineSvg}></AntdIcon>;
};

ArrowRightLine.displayName = 'ArrowRightLine';
ArrowRightLine.inheritAttrs = false;
export default ArrowRightLine;