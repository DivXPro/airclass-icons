// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UbuntuFillSvg from '@airclass/icons-svg/lib/asn/UbuntuFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UbuntuFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UbuntuFillSvg}></AntdIcon>;
};

UbuntuFill.displayName = 'UbuntuFill';
UbuntuFill.inheritAttrs = false;
export default UbuntuFill;