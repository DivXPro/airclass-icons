// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BearSmileLineSvg from '@airclass/icons-svg/lib/asn/BearSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BearSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BearSmileLineSvg}></AntdIcon>;
};

BearSmileLine.displayName = 'BearSmileLine';
BearSmileLine.inheritAttrs = false;
export default BearSmileLine;