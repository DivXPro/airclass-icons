// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BringForwardSvg from '@airclass/icons-svg/lib/asn/BringForward';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BringForward = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BringForwardSvg}></AntdIcon>;
};

BringForward.displayName = 'BringForward';
BringForward.inheritAttrs = false;
export default BringForward;