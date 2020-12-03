// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowRightFillSvg from '@airclass/icons-svg/lib/asn/ArrowRightFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightFillSvg}></AntdIcon>;
};

ArrowRightFill.displayName = 'ArrowRightFill';
ArrowRightFill.inheritAttrs = false;
export default ArrowRightFill;