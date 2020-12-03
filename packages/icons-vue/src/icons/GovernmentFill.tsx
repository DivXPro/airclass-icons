// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GovernmentFillSvg from '@airclass/icons-svg/lib/asn/GovernmentFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GovernmentFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GovernmentFillSvg}></AntdIcon>;
};

GovernmentFill.displayName = 'GovernmentFill';
GovernmentFill.inheritAttrs = false;
export default GovernmentFill;