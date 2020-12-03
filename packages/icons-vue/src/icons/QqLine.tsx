// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QqLineSvg from '@airclass/icons-svg/lib/asn/QqLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QqLineSvg}></AntdIcon>;
};

QqLine.displayName = 'QqLine';
QqLine.inheritAttrs = false;
export default QqLine;