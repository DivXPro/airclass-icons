// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicrosoftFillSvg from '@airclass/icons-svg/lib/asn/MicrosoftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicrosoftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrosoftFillSvg}></AntdIcon>;
};

MicrosoftFill.displayName = 'MicrosoftFill';
MicrosoftFill.inheritAttrs = false;
export default MicrosoftFill;