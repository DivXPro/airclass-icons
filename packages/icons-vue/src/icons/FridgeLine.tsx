// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FridgeLineSvg from '@airclass/icons-svg/lib/asn/FridgeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FridgeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FridgeLineSvg}></AntdIcon>;
};

FridgeLine.displayName = 'FridgeLine';
FridgeLine.inheritAttrs = false;
export default FridgeLine;