// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowLeftRightLineSvg from '@airclass/icons-svg/lib/asn/ArrowLeftRightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftRightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftRightLineSvg}></AntdIcon>;
};

ArrowLeftRightLine.displayName = 'ArrowLeftRightLine';
ArrowLeftRightLine.inheritAttrs = false;
export default ArrowLeftRightLine;