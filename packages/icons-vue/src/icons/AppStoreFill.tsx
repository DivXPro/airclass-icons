// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppStoreFillSvg from '@airclass/icons-svg/lib/asn/AppStoreFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppStoreFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppStoreFillSvg}></AntdIcon>;
};

AppStoreFill.displayName = 'AppStoreFill';
AppStoreFill.inheritAttrs = false;
export default AppStoreFill;