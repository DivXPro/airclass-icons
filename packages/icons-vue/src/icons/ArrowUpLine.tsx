// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpLineSvg from '@airclass/icons-svg/lib/asn/ArrowUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpLineSvg}></AntdIcon>;
};

ArrowUpLine.displayName = 'ArrowUpLine';
ArrowUpLine.inheritAttrs = false;
export default ArrowUpLine;