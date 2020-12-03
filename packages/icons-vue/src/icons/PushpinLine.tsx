// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PushpinLineSvg from '@airclass/icons-svg/lib/asn/PushpinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinLineSvg}></AntdIcon>;
};

PushpinLine.displayName = 'PushpinLine';
PushpinLine.inheritAttrs = false;
export default PushpinLine;