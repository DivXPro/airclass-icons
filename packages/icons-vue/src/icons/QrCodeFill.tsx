// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrCodeFillSvg from '@airclass/icons-svg/lib/asn/QrCodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrCodeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrCodeFillSvg}></AntdIcon>;
};

QrCodeFill.displayName = 'QrCodeFill';
QrCodeFill.inheritAttrs = false;
export default QrCodeFill;