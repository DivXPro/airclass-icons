// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldKeyholeLineSvg from '@airclass/icons-svg/lib/asn/ShieldKeyholeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldKeyholeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldKeyholeLineSvg}></AntdIcon>;
};

ShieldKeyholeLine.displayName = 'ShieldKeyholeLine';
ShieldKeyholeLine.inheritAttrs = false;
export default ShieldKeyholeLine;