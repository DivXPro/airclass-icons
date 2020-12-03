// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RewindFillSvg from '@airclass/icons-svg/lib/asn/RewindFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RewindFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RewindFillSvg}></AntdIcon>;
};

RewindFill.displayName = 'RewindFill';
RewindFill.inheritAttrs = false;
export default RewindFill;