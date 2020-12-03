// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CapsuleLineSvg from '@airclass/icons-svg/lib/asn/CapsuleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CapsuleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CapsuleLineSvg}></AntdIcon>;
};

CapsuleLine.displayName = 'CapsuleLine';
CapsuleLine.inheritAttrs = false;
export default CapsuleLine;