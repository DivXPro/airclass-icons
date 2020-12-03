// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PassportFillSvg from '@airclass/icons-svg/lib/asn/PassportFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PassportFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PassportFillSvg}></AntdIcon>;
};

PassportFill.displayName = 'PassportFill';
PassportFill.inheritAttrs = false;
export default PassportFill;