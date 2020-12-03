// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutMasonryFillSvg from '@airclass/icons-svg/lib/asn/LayoutMasonryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutMasonryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutMasonryFillSvg}></AntdIcon>;
};

LayoutMasonryFill.displayName = 'LayoutMasonryFill';
LayoutMasonryFill.inheritAttrs = false;
export default LayoutMasonryFill;