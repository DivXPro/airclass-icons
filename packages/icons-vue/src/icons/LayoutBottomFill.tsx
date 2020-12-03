// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutBottomFillSvg from '@airclass/icons-svg/lib/asn/LayoutBottomFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutBottomFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutBottomFillSvg}></AntdIcon>;
};

LayoutBottomFill.displayName = 'LayoutBottomFill';
LayoutBottomFill.inheritAttrs = false;
export default LayoutBottomFill;