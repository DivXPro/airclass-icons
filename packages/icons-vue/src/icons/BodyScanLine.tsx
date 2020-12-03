// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BodyScanLineSvg from '@airclass/icons-svg/lib/asn/BodyScanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BodyScanLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BodyScanLineSvg}></AntdIcon>;
};

BodyScanLine.displayName = 'BodyScanLine';
BodyScanLine.inheritAttrs = false;
export default BodyScanLine;