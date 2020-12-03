// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScanFillSvg from '@airclass/icons-svg/lib/asn/ScanFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanFillSvg}></AntdIcon>;
};

ScanFill.displayName = 'ScanFill';
ScanFill.inheritAttrs = false;
export default ScanFill;