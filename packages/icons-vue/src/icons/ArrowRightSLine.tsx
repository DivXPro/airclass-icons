// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowRightSLineSvg from '@airclass/icons-svg/lib/asn/ArrowRightSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightSLineSvg}></AntdIcon>;
};

ArrowRightSLine.displayName = 'ArrowRightSLine';
ArrowRightSLine.inheritAttrs = false;
export default ArrowRightSLine;