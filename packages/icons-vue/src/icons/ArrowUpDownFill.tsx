// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowUpDownFillSvg from '@airclass/icons-svg/lib/asn/ArrowUpDownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpDownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpDownFillSvg}></AntdIcon>;
};

ArrowUpDownFill.displayName = 'ArrowUpDownFill';
ArrowUpDownFill.inheritAttrs = false;
export default ArrowUpDownFill;