// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppsFillSvg from '@airclass/icons-svg/lib/asn/AppsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppsFillSvg}></AntdIcon>;
};

AppsFill.displayName = 'AppsFill';
AppsFill.inheritAttrs = false;
export default AppsFill;