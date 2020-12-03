// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrScanFillSvg from '@airclass/icons-svg/lib/asn/QrScanFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrScanFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrScanFillSvg}></AntdIcon>;
};

QrScanFill.displayName = 'QrScanFill';
QrScanFill.inheritAttrs = false;
export default QrScanFill;