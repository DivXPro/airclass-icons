// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutGridFillSvg from '@airclass/icons-svg/lib/asn/LayoutGridFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutGridFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutGridFillSvg}></AntdIcon>;
};

LayoutGridFill.displayName = 'LayoutGridFill';
LayoutGridFill.inheritAttrs = false;
export default LayoutGridFill;