// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrScan2FillSvg from '@airclass/icons-svg/lib/asn/QrScan2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrScan2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrScan2FillSvg}></AntdIcon>;
};

QrScan2Fill.displayName = 'QrScan2Fill';
QrScan2Fill.inheritAttrs = false;
export default QrScan2Fill;