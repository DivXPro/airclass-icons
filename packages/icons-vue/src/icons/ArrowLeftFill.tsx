// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowLeftFillSvg from '@airclass/icons-svg/lib/asn/ArrowLeftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftFillSvg}></AntdIcon>;
};

ArrowLeftFill.displayName = 'ArrowLeftFill';
ArrowLeftFill.inheritAttrs = false;
export default ArrowLeftFill;