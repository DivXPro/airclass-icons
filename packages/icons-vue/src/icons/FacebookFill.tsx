// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FacebookFillSvg from '@airclass/icons-svg/lib/asn/FacebookFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FacebookFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FacebookFillSvg}></AntdIcon>;
};

FacebookFill.displayName = 'FacebookFill';
FacebookFill.inheritAttrs = false;
export default FacebookFill;