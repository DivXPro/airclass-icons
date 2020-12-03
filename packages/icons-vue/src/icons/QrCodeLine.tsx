// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrCodeLineSvg from '@airclass/icons-svg/lib/asn/QrCodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrCodeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrCodeLineSvg}></AntdIcon>;
};

QrCodeLine.displayName = 'QrCodeLine';
QrCodeLine.inheritAttrs = false;
export default QrCodeLine;