// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChromeFillSvg from '@airclass/icons-svg/lib/asn/ChromeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeFillSvg}></AntdIcon>;
};

ChromeFill.displayName = 'ChromeFill';
ChromeFill.inheritAttrs = false;
export default ChromeFill;