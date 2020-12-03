// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LungsLineSvg from '@airclass/icons-svg/lib/asn/LungsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LungsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LungsLineSvg}></AntdIcon>;
};

LungsLine.displayName = 'LungsLine';
LungsLine.inheritAttrs = false;
export default LungsLine;