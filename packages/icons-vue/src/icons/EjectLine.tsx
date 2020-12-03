// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EjectLineSvg from '@airclass/icons-svg/lib/asn/EjectLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EjectLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EjectLineSvg}></AntdIcon>;
};

EjectLine.displayName = 'EjectLine';
EjectLine.inheritAttrs = false;
export default EjectLine;