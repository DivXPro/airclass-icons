// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkullFillSvg from '@airclass/icons-svg/lib/asn/SkullFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkullFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkullFillSvg}></AntdIcon>;
};

SkullFill.displayName = 'SkullFill';
SkullFill.inheritAttrs = false;
export default SkullFill;