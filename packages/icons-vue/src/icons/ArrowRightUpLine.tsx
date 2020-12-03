// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowRightUpLineSvg from '@airclass/icons-svg/lib/asn/ArrowRightUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightUpLineSvg}></AntdIcon>;
};

ArrowRightUpLine.displayName = 'ArrowRightUpLine';
ArrowRightUpLine.inheritAttrs = false;
export default ArrowRightUpLine;