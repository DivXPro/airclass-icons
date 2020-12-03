// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDropUpLineSvg from '@airclass/icons-svg/lib/asn/ArrowDropUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDropUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDropUpLineSvg}></AntdIcon>;
};

ArrowDropUpLine.displayName = 'ArrowDropUpLine';
ArrowDropUpLine.inheritAttrs = false;
export default ArrowDropUpLine;