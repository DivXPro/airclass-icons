// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraSwitchFillSvg from '@airclass/icons-svg/lib/asn/CameraSwitchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraSwitchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSwitchFillSvg}></AntdIcon>;
};

CameraSwitchFill.displayName = 'CameraSwitchFill';
CameraSwitchFill.inheritAttrs = false;
export default CameraSwitchFill;