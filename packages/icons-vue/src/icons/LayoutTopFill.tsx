// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutTopFillSvg from '@airclass/icons-svg/lib/asn/LayoutTopFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutTopFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutTopFillSvg}></AntdIcon>;
};

LayoutTopFill.displayName = 'LayoutTopFill';
LayoutTopFill.inheritAttrs = false;
export default LayoutTopFill;