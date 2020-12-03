// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UsbLineSvg from '@airclass/icons-svg/lib/asn/UsbLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbLineSvg}></AntdIcon>;
};

UsbLine.displayName = 'UsbLine';
UsbLine.inheritAttrs = false;
export default UsbLine;