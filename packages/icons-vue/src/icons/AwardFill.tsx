// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AwardFillSvg from '@airclass/icons-svg/lib/asn/AwardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AwardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardFillSvg}></AntdIcon>;
};

AwardFill.displayName = 'AwardFill';
AwardFill.inheritAttrs = false;
export default AwardFill;