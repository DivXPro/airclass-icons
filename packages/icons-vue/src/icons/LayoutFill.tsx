// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutFillSvg from '@airclass/icons-svg/lib/asn/LayoutFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutFillSvg}></AntdIcon>;
};

LayoutFill.displayName = 'LayoutFill';
LayoutFill.inheritAttrs = false;
export default LayoutFill;