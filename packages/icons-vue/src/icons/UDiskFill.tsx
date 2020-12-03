// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UDiskFillSvg from '@airclass/icons-svg/lib/asn/UDiskFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UDiskFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UDiskFillSvg}></AntdIcon>;
};

UDiskFill.displayName = 'UDiskFill';
UDiskFill.inheritAttrs = false;
export default UDiskFill;