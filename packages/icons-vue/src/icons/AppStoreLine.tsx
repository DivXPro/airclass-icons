// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppStoreLineSvg from '@airclass/icons-svg/lib/asn/AppStoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppStoreLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppStoreLineSvg}></AntdIcon>;
};

AppStoreLine.displayName = 'AppStoreLine';
AppStoreLine.inheritAttrs = false;
export default AppStoreLine;