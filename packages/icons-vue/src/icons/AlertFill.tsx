// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlertFillSvg from '@airclass/icons-svg/lib/asn/AlertFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertFillSvg}></AntdIcon>;
};

AlertFill.displayName = 'AlertFill';
AlertFill.inheritAttrs = false;
export default AlertFill;