// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowGoBackFillSvg from '@airclass/icons-svg/lib/asn/ArrowGoBackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowGoBackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowGoBackFillSvg}></AntdIcon>;
};

ArrowGoBackFill.displayName = 'ArrowGoBackFill';
ArrowGoBackFill.inheritAttrs = false;
export default ArrowGoBackFill;