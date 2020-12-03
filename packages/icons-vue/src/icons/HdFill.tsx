// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HdFillSvg from '@airclass/icons-svg/lib/asn/HdFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HdFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HdFillSvg}></AntdIcon>;
};

HdFill.displayName = 'HdFill';
HdFill.inheritAttrs = false;
export default HdFill;