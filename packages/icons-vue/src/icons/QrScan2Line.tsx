// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrScan2LineSvg from '@airclass/icons-svg/lib/asn/QrScan2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrScan2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrScan2LineSvg}></AntdIcon>;
};

QrScan2Line.displayName = 'QrScan2Line';
QrScan2Line.inheritAttrs = false;
export default QrScan2Line;