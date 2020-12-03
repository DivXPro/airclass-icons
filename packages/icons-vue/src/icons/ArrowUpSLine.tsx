// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpSLineSvg from '@airclass/icons-svg/lib/asn/ArrowUpSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpSLineSvg}></AntdIcon>;
};

ArrowUpSLine.displayName = 'ArrowUpSLine';
ArrowUpSLine.inheritAttrs = false;
export default ArrowUpSLine;