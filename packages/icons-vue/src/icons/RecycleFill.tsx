// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RecycleFillSvg from '@airclass/icons-svg/lib/asn/RecycleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecycleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecycleFillSvg}></AntdIcon>;
};

RecycleFill.displayName = 'RecycleFill';
RecycleFill.inheritAttrs = false;
export default RecycleFill;