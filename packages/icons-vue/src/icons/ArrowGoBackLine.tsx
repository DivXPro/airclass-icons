// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArrowGoBackLineSvg from '@airclass/icons-svg/lib/asn/ArrowGoBackLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowGoBackLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowGoBackLineSvg}></AntdIcon>;
};

ArrowGoBackLine.displayName = 'ArrowGoBackLine';
ArrowGoBackLine.inheritAttrs = false;
export default ArrowGoBackLine;