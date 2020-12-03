// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpFillSvg from '@airclass/icons-svg/lib/asn/ArrowUpFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpFillSvg}></AntdIcon>;
};

ArrowUpFill.displayName = 'ArrowUpFill';
ArrowUpFill.inheritAttrs = false;
export default ArrowUpFill;