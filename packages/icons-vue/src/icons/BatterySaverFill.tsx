// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BatterySaverFillSvg from '@airclass/icons-svg/lib/asn/BatterySaverFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BatterySaverFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatterySaverFillSvg}></AntdIcon>;
};

BatterySaverFill.displayName = 'BatterySaverFill';
BatterySaverFill.inheritAttrs = false;
export default BatterySaverFill;