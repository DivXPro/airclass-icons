// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShowersFillSvg from '@airclass/icons-svg/lib/asn/ShowersFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShowersFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShowersFillSvg}></AntdIcon>;
};

ShowersFill.displayName = 'ShowersFill';
ShowersFill.inheritAttrs = false;
export default ShowersFill;