// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrScanLineSvg from '@airclass/icons-svg/lib/asn/QrScanLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrScanLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrScanLineSvg}></AntdIcon>;
};

QrScanLine.displayName = 'QrScanLine';
QrScanLine.inheritAttrs = false;
export default QrScanLine;