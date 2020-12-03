// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowDownFillSvg from '@airclass/icons-svg/lib/asn/ArrowDownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownFillSvg}></AntdIcon>;
};

ArrowDownFill.displayName = 'ArrowDownFill';
ArrowDownFill.inheritAttrs = false;
export default ArrowDownFill;