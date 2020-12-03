// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScanLineSvg from '@airclass/icons-svg/lib/asn/ScanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanLineSvg}></AntdIcon>;
};

ScanLine.displayName = 'ScanLine';
ScanLine.inheritAttrs = false;
export default ScanLine;