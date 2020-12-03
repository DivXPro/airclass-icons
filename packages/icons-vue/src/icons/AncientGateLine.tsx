// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AncientGateLineSvg from '@airclass/icons-svg/lib/asn/AncientGateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AncientGateLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AncientGateLineSvg}></AntdIcon>;
};

AncientGateLine.displayName = 'AncientGateLine';
AncientGateLine.inheritAttrs = false;
export default AncientGateLine;