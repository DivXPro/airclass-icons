// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CakeLineSvg from '@airclass/icons-svg/lib/asn/CakeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CakeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeLineSvg}></AntdIcon>;
};

CakeLine.displayName = 'CakeLine';
CakeLine.inheritAttrs = false;
export default CakeLine;