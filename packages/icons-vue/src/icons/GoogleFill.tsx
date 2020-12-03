// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoogleFillSvg from '@airclass/icons-svg/lib/asn/GoogleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleFillSvg}></AntdIcon>;
};

GoogleFill.displayName = 'GoogleFill';
GoogleFill.inheritAttrs = false;
export default GoogleFill;