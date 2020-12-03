// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ForbidFillSvg from '@airclass/icons-svg/lib/asn/ForbidFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForbidFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbidFillSvg}></AntdIcon>;
};

ForbidFill.displayName = 'ForbidFill';
ForbidFill.inheritAttrs = false;
export default ForbidFill;