// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpDownLineSvg from '@airclass/icons-svg/lib/asn/ArrowUpDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpDownLineSvg}></AntdIcon>;
};

ArrowUpDownLine.displayName = 'ArrowUpDownLine';
ArrowUpDownLine.inheritAttrs = false;
export default ArrowUpDownLine;