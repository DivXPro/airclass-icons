// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FireFillSvg from '@airclass/icons-svg/lib/asn/FireFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FireFillSvg}></AntdIcon>;
};

FireFill.displayName = 'FireFill';
FireFill.inheritAttrs = false;
export default FireFill;