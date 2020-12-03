// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OutletFillSvg from '@airclass/icons-svg/lib/asn/OutletFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OutletFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OutletFillSvg}></AntdIcon>;
};

OutletFill.displayName = 'OutletFill';
OutletFill.inheritAttrs = false;
export default OutletFill;