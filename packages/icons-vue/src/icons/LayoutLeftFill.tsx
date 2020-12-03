// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutLeftFillSvg from '@airclass/icons-svg/lib/asn/LayoutLeftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutLeftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutLeftFillSvg}></AntdIcon>;
};

LayoutLeftFill.displayName = 'LayoutLeftFill';
LayoutLeftFill.inheritAttrs = false;
export default LayoutLeftFill;