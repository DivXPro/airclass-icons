// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UsbFillSvg from '@airclass/icons-svg/lib/asn/UsbFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbFillSvg}></AntdIcon>;
};

UsbFill.displayName = 'UsbFill';
UsbFill.inheritAttrs = false;
export default UsbFill;