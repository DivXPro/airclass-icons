// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OpenSourceFillSvg from '@airclass/icons-svg/lib/asn/OpenSourceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenSourceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenSourceFillSvg}></AntdIcon>;
};

OpenSourceFill.displayName = 'OpenSourceFill';
OpenSourceFill.inheritAttrs = false;
export default OpenSourceFill;