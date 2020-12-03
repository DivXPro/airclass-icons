// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GooglePlayFillSvg from '@airclass/icons-svg/lib/asn/GooglePlayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GooglePlayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GooglePlayFillSvg}></AntdIcon>;
};

GooglePlayFill.displayName = 'GooglePlayFill';
GooglePlayFill.inheritAttrs = false;
export default GooglePlayFill;