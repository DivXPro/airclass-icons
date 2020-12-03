// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UmbrellaFillSvg from '@airclass/icons-svg/lib/asn/UmbrellaFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UmbrellaFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UmbrellaFillSvg}></AntdIcon>;
};

UmbrellaFill.displayName = 'UmbrellaFill';
UmbrellaFill.inheritAttrs = false;
export default UmbrellaFill;